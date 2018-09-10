import styled, { css } from 'styled-components';
import { media } from './utils';

const bigScale = 1.414; // Augmented 4th
const medScale = 1.25; // Major 3rd
const smallScale = 1.125; // Major 2nd

const sizes = [1, 2, 3, 4, 5, 6, 7];
const smallSizes = sizes.map((_, index) => Math.pow(smallScale, index));
const medSizes = sizes.map((_, index) => Math.pow(medScale, index));
const bigSizes = sizes.map((_, index) => Math.pow(bigScale, index));

const TextBase = css`
  text-rendering: optimizeLegibility;
`;

export const Text = styled.p`
  ${TextBase};

  font-family: 'Open Sans', sans-serif;
  font-size: ${smallSizes[0]}em;
  line-height: ${smallScale};
  ${media.tablet`
    font-size: ${medSizes[0]}em;
    line-height: ${medScale};
  `} ${media.desktop`
    font-size: ${bigSizes[0]}em;
    line-height: ${bigScale};
  `};
`;

export const BaseHeader = css`
  ${TextBase};
  color: #ffffff;
  font-family: 'Raleway', sans-serif;
`;

const generateHeader = <K extends keyof JSX.IntrinsicElements>(
  size: number,
  component: K,
) => styled(component)`
  ${BaseHeader};

  margin: 0;

  ${generateHeaderSize(size)};
`;

export const generateHeaderSize = (val: number) => css`
  font-size: ${smallSizes[val]}em;
  line-height: ${smallScale};
  ${media.tablet`
    font-size: ${medSizes[val]}em;
    line-height: ${medScale};
  `} ${media.desktop`
    font-size: ${bigSizes[val]}em;
    line-height: ${bigScale};
  `};
`;

export const H1 = generateHeader(6, 'h1');
export const H2 = generateHeader(5, 'h2');
export const H3 = generateHeader(4, 'h3');
export const H4 = generateHeader(3, 'h4');
export const H5 = generateHeader(2, 'h5');
export const H6 = generateHeader(1, 'h6');
