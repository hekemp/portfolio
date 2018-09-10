import { css } from 'styled-components';

export const colors = {
  navy: '#001f3f',
  blue: '#0074d9',
  aqua: '#7fdbff',
  teal: '#39cccc',
  olive: '#3d9970',
  green: '#2ecc40',
  lime: '#01ff70',
  yellow: '#ffdc00',
  orange: '#ff851b',
  red: '#ff4136',
  maroon: '#85144b',
  fuchsia: '#f012be',
  purple: '#b10dc9',
  black: '#111111',
  gray: '#aaaaaa',
  silver: '#dddddd',
  white: '#ffffff',
};

export const clearfix = css`
  &::after {
    clear: both;
    content: ' ';
    display: table;
  }
`;

export const center = (width: string, height: string = '0') => css`
  position: absolute;
  ${height !== '0'
    ? css`
        left: calc(50% - (${width} / 2));
        top: calc(50% - (${height} / 2));
      `
    : css`
        left: calc(50% - (${width} / 2));
        top: calc(50% - (${width} / 2));
      `};
`;

export const overflowTouch = css`
  -webkit-overflow-scrolling: touch;
`;

export const gap: number = 64;

export const sizes = {
  tablet: 769,
  desktop: 960 + 2 * gap,
  widescreen: 1152 + 2 * gap,
  fullhd: 1344 + 2 * gap,
};

export const media = {
  from: (device: keyof typeof sizes) => (
    literals: TemplateStringsArray,
    ...placeholders: any[]
  ) => css`
    @media screen and (min-width: ${sizes[device]}px) {
      ${css(literals, ...placeholders)};
    }
  `,
  until: (device: keyof typeof sizes) => (
    literals: TemplateStringsArray,
    ...placeholders: any[]
  ) => css`
    @media screen and (max-width: ${sizes[device] - 1}px) {
      ${css(literals, ...placeholders)};
    }
  `,
  mobile: (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media screen and (max-width: ${sizes.tablet - 1}px) {
      ${css(literals, ...placeholders)};
    }
  `,
  tablet: (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media screen and (min-width: ${sizes.tablet}px), print {
      ${css(literals, ...placeholders)};
    }
  `,
  tablet_only: (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media screen and (min-width: ${sizes.tablet}px) and (max-width: ${sizes.desktop -
        1}px) {
      ${css(literals, ...placeholders)};
    }
  `,
  touch: (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media screen and (max-width: ${sizes.desktop - 1}px) {
      ${css(literals, ...placeholders)};
    }
  `,
  desktop: (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media screen and (min-width: ${sizes.desktop}px) {
      ${css(literals, ...placeholders)};
    }
  `,
  desktop_only: (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media screen and (min-width: ${sizes.desktop}px) and (max-width: ${sizes.widescreen -
        1}px) {
      ${css(literals, ...placeholders)};
    }
  `,
  until_widescreen: (
    literals: TemplateStringsArray,
    ...placeholders: any[]
  ) => css`
    @media screen and (max-width: ${sizes.widescreen - 1}px) {
      ${css(literals, ...placeholders)};
    }
  `,
  widescreen: (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media screen and (min-width: ${sizes.widescreen}px) {
      ${css(literals, ...placeholders)};
    }
  `,
  widescreen_only: (
    literals: TemplateStringsArray,
    ...placeholders: any[]
  ) => css`
    @media screen and (min-width: ${sizes.widescreen}px) and (max-width: ${sizes.fullhd -
        1}px) {
      ${css(literals, ...placeholders)};
    }
  `,
  until_fullhd: (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media screen and (max-width: ${sizes.fullhd - 1}px) {
      ${css(literals, ...placeholders)};
    }
  `,
  fullhd: (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media screen and (min-width: ${sizes.fullhd}px) {
      ${css(literals, ...placeholders)};
    }
  `,
};

export const unselectable = css`
  -webkit-touch-callout: none;
  user-select: none;
`;
