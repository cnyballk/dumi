import type AtomAssetsParser from '@/assetParsers/atom';
import type { IApi } from '@/types';
import assert from 'assert';
import { ATOMS_META_PATH } from './meta';

export default (api: IApi) => {
  let prevData: Awaited<ReturnType<AtomAssetsParser['parse']>>;
  const writeAtomsMetaFile = (data: typeof prevData) => {
    api.writeTmpFile({
      noPluginDir: true,
      path: ATOMS_META_PATH,
      content: `export const components = ${JSON.stringify(
        data.components,
        null,
        2,
      )};`,
    });
  };

  api.describe({
    key: 'apiParser',
    enableBy: api.EnableBy.config,
    config: {
      schema: (Joi) =>
        Joi.object({
          unpkgHost: Joi.string().uri().optional(),
          resolveFilter: Joi.function().optional(),
        }),
    },
  });

  // auto-detect default entry file
  api.modifyDefaultConfig((memo) => {
    // TODO: read entry from father config or support configured in config
    assert(
      api.userConfig.resolve?.entryFile,
      '`resolve.entryFile` must be configured when `apiParser` enable',
    );

    return memo;
  });

  // share parser with other plugins via service
  api.onStart(async () => {
    const {
      default: AtomAssetsParser,
    }: typeof import('@/assetParsers/atom') = require('@/assetParsers/atom');
    api.service.atomParser = new AtomAssetsParser({
      entryFile: api.config.resolve.entryFile!,
      resolveDir: api.cwd,
      unpkgHost: api.config.apiParser!.unpkgHost,
      resolveFilter: api.config.apiParser!.resolveFilter,
    });
  });

  // lazy parse & use watch mode in dev compiling
  api.onDevCompileDone(({ isFirstCompile }) => {
    if (isFirstCompile) {
      api.service.atomParser.watch((data) => {
        prevData = data;
        writeAtomsMetaFile(prevData);
      });
    }
  });

  api.onGenerateFiles(async () => {
    if (api.env === 'production') {
      // sync parse in production
      writeAtomsMetaFile(await api.service.atomParser.parse());
      api.service.atomParser.destroy();
    } else if (prevData) {
      // also write prev data when re-generate files in development
      writeAtomsMetaFile(prevData);
    }
  });
};
