import { FormattedMessage, usePrefersColor } from 'dumi';
import React, { type FC } from 'react';
import './index.less';

const IconDark = () => (
  <svg viewBox="0 0 16 16">
    <path d="M8.218 1.455c3.527.109 6.327 3.018 6.327 6.545 0 3.6-2.945 6.545-6.545 6.545a6.562 6.562 0 0 1-6.036-4h.218c3.6 0 6.545-2.945 6.545-6.545 0-.91-.182-1.745-.509-2.545m0-1.455c-.473 0-.909.218-1.2.618-.29.4-.327.946-.145 1.382.254.655.4 1.31.4 2 0 2.8-2.291 5.09-5.091 5.09h-.218c-.473 0-.91.22-1.2.62-.291.4-.328.945-.146 1.38C1.891 14.074 4.764 16 8 16c4.4 0 8-3.6 8-8a7.972 7.972 0 0 0-7.745-8h-.037Z" />
  </svg>
);

const IconLight = () => (
  <svg viewBox="0 0 18 18">
    <path d="M14.635 2.642a.7.7 0 0 1 .51.214.695.695 0 0 1 .214.51c0 .2-.071.371-.215.514L14.12 4.904a.69.69 0 0 1-.509.21.704.704 0 0 1-.724-.724c0-.201.07-.37.21-.51l1.023-1.024a.707.707 0 0 1 .515-.214Zm.883 5.634h1.448c.2 0 .37.07.512.212A.696.696 0 0 1 17.69 9c0 .2-.07.372-.212.512a.693.693 0 0 1-.512.212h-1.448c-.2 0-.37-.07-.513-.212A.696.696 0 0 1 14.793 9a.7.7 0 0 1 .212-.512.696.696 0 0 1 .513-.212ZM9 .31c.2 0 .37.072.512.212a.704.704 0 0 1 .212.512v1.448c0 .2-.07.372-.212.512A.698.698 0 0 1 9 3.209c-.2 0-.37-.073-.513-.215a.696.696 0 0 1-.212-.512V1.034c0-.198.071-.37.212-.512A.706.706 0 0 1 9 .31ZM3.37 2.642c.197 0 .367.072.51.214L4.904 3.88a.693.693 0 0 1 .215.51c0 .2-.07.371-.213.511a.693.693 0 0 1-.512.212.704.704 0 0 1-.514-.207L2.856 3.882a.7.7 0 0 1-.21-.516c0-.2.071-.37.213-.512a.703.703 0 0 1 .513-.212H3.37Zm10.241 10.24a.69.69 0 0 1 .51.215l1.023 1.023a.701.701 0 0 1 .215.514.694.694 0 0 1-.215.51.69.69 0 0 1-.51.214c-.199 0-.37-.07-.514-.214l-1.024-1.024a.69.69 0 0 1-.209-.51c0-.2.07-.371.213-.513a.697.697 0 0 1 .512-.215Zm-4.61-6.779c-.8 0-1.483.283-2.05.85A2.789 2.789 0 0 0 6.104 9c0 .8.283 1.482.849 2.05A2.795 2.795 0 0 0 9 11.897c.8 0 1.482-.283 2.049-.848.565-.567.848-1.25.848-2.049 0-.8-.283-1.482-.848-2.047A2.789 2.789 0 0 0 9 6.103ZM1.033 8.276h1.448c.2 0 .37.07.513.212A.7.7 0 0 1 3.207 9c0 .2-.071.372-.212.512a.696.696 0 0 1-.513.212H1.034c-.2 0-.37-.07-.512-.212A.692.692 0 0 1 .31 9c0-.2.07-.37.212-.512a.694.694 0 0 1 .512-.212ZM9 14.794c.2 0 .37.07.512.212a.7.7 0 0 1 .213.512v1.448c0 .2-.072.372-.213.512A.696.696 0 0 1 9 17.69c-.2 0-.37-.07-.513-.212a.696.696 0 0 1-.212-.512v-1.448a.7.7 0 0 1 .212-.512.696.696 0 0 1 .513-.212Zm-4.605-1.912c.2 0 .37.07.512.215a.704.704 0 0 1 .213.514.692.692 0 0 1-.216.509l-1.023 1.024a.69.69 0 0 1-.51.214.7.7 0 0 1-.512-.21.7.7 0 0 1-.212-.514c0-.203.069-.374.209-.514l1.024-1.023a.696.696 0 0 1 .514-.215h.001ZM9 4.655c.788 0 1.515.195 2.18.581a4.337 4.337 0 0 1 1.582 1.584A4.24 4.24 0 0 1 13.345 9a4.25 4.25 0 0 1-.583 2.182 4.363 4.363 0 0 1-1.581 1.581A4.243 4.243 0 0 1 9 13.345c-.79 0-1.516-.193-2.181-.582a4.37 4.37 0 0 1-1.581-1.58A4.252 4.252 0 0 1 4.655 9c0-.79.195-1.516.583-2.18a4.338 4.338 0 0 1 1.581-1.583A4.272 4.272 0 0 1 9 4.655Z" />
  </svg>
);

const IconAuto = () => (
  <svg viewBox="0 0 16 16">
    <path d="M14.595 8a6.595 6.595 0 1 1-13.19 0 6.595 6.595 0 0 1 13.19 0ZM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm0 2.014v11.972A5.986 5.986 0 0 0 8 2.014Z" />
  </svg>
);

const ICON_MAPPING = {
  light: IconLight,
  dark: IconDark,
  auto: IconAuto,
};

const ColorSwitch: FC = () => {
  const [, prefersColor, setPrefersColor] = usePrefersColor();
  const Icon = ICON_MAPPING[prefersColor];

  return (
    <span className="dumi-default-color-switch">
      {Icon && <Icon />}
      <select
        onChange={(ev) => setPrefersColor(ev.target.value as any)}
        value={prefersColor}
      >
        <option value="light">
          <FormattedMessage id="header.color.mode.light" />
        </option>
        <option value="dark">
          <FormattedMessage id="header.color.mode.dark" />
        </option>
        <option value="auto">
          <FormattedMessage id="header.color.mode.auto" />
        </option>
      </select>
    </span>
  );
};

export default ColorSwitch;
