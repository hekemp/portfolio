import styled, { css } from 'styled-components';
import { Colors, getFontSize, vars } from './style-variables'

const TextBase = css`
  text-rendering: ${vars["render-mode"]};
  ${getFontSize('normal')}
`;

export const Text = styled.p`
  ${TextBase};
  margin-top: 0em;
  margin-bottom: 2em;

  font-family: ${vars["family-body"]};
`;

export const BaseHeader = css`
  ${TextBase};
  font-family: 'Raleway', sans-serif;
  ${getFontSize('large')}
`;


interface ITextProps {
  color?: Colors
}

const generateHeader = <K extends keyof JSX.IntrinsicElements>(
  size: number,
  component: K,
) => styled<ITextProps, K>(component)`
  ${BaseHeader};
  color: ${(props: ITextProps) => props.color ? vars[props.color] : 'black'};

  display: block;
  margin-top: 0;
  margin-bottom: 0;

  ${generateHeaderSize(size)};
  font-weight: ${size > 4 ? 800 : 400};
`;

export const generateHeaderSize = (val: number) => css`
  ${getFontSize(val)}
`;

export const H1 = generateHeader(1, 'h1');
export const H2 = generateHeader(2, 'h2');
export const H3 = generateHeader(3, 'h3');
export const H4 = generateHeader(4, 'h4');
export const H5 = generateHeader(5, 'h5');
export const H6 = generateHeader(6, 'h6');
