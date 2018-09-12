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
  line-height: ${smallScale};
  ${media.tablet`
    line-height: ${medScale};
  `};
  ${media.desktop`
    line-height: ${bigScale};
  `};
`;

export const Text = styled.p`
  ${TextBase};
  margin-top: 0em;
  margin-bottom: 2em;

  font-family: 'Open Sans', sans-serif;
  font-size: ${smallSizes[0]}em;
  ${media.tablet`
    font-size: ${medSizes[0]}em;
  `} ${media.desktop`
    font-size: ${bigSizes[0]}em;
  `};
`;

export const BaseHeader = css`
  ${TextBase};
  font-family: 'Raleway', sans-serif;
`;


interface ITextProps {
  color?: 'white' | 'black'
}


const generateHeader = <K extends keyof JSX.IntrinsicElements>(
  size: number,
  component: K,
) => styled<ITextProps, K>(component)`
  ${BaseHeader};
  color: ${(props: ITextProps) => props.color ? props.color : 'white'};

  display: block;
  margin-top: 0;
  margin-bottom: 0;

  ${generateHeaderSize(size)};
  font-weight: ${size > 4 ? 800 : 400};
`;

export const generateHeaderSize = (val: number) => css`
  font-size: ${smallSizes[val]}em;
  ${media.tablet`
    font-size: ${medSizes[val]}em;
  `} ${media.desktop`
    font-size: ${bigSizes[val]}em;
  `};
`;

export const H1 = generateHeader(6, 'h1');
export const H2 = generateHeader(5, 'h2');
export const H3 = generateHeader(4, 'h3');
export const H4 = generateHeader(3, 'h4');
export const H5 = generateHeader(2, 'h5');
export const H6 = generateHeader(1, 'h6');
