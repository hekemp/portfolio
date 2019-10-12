import styled, { css } from 'styled-components'
import { getFontSize, vars } from './style-variables'

const TextBase = css`
  text-rendering: ${vars['render-mode']};
  ${getFontSize('normal')};
`

interface ITextProps {
  color?: string
  alignment?: 'left' | 'center' | 'right' | 'justify'
}

export const Text = styled.p<ITextProps>`
  ${TextBase};
  margin-top: 0em;
  margin-bottom: 1em;

  font-family: ${vars['family-body']};

  color: ${(props: ITextProps) =>
    props.color ? props.color : vars['grey-dark']};
  text-align: ${(props: ITextProps) =>
    props.alignment ? props.alignment : 'left'};

  & > a {
    color: ${vars.blue};
    text-decoration: none;
    transition: all 0.1s ease-in-out;
    display: inline-block;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      bottom: 1px;
      left: 0;
      width: 100%;
      height: 1px;
      display: block;
      transition: all 0.1s ease-in-out;
      transform: translateY(-5px) scaleX(0);
      background-color: ${vars.blue};
      opacity: 0;
    }
    &:hover {
      color: ${vars.primary()};
      cursor: pointer;
      &:before {
        transform: translateY(0) scaleX(1);
        background-color: ${vars.primary()};
        opacity: 1;
      }
    }
  }
`

export const BaseHeader = css`
  ${TextBase};
  font-family: 'Raleway', sans-serif;
  ${getFontSize('large')};
`

const generateHeader = <K extends keyof JSX.IntrinsicElements>(
  size: number,
  component: K,
) => styled<ITextProps, K>(component)`
  ${BaseHeader};
  color: ${(props: ITextProps) => (props.color ? props.color : vars.dark())};
  text-align: ${(props: ITextProps) =>
    props.alignment ? props.alignment : 'left'};

  display: block;
  margin-top: 0;
  margin-bottom: 0;

  ${generateHeaderSize(size)};
  font-weight: ${size < 4 ? vars['weight-bold'] : vars['weight-normal']};
`

export const generateHeaderSize = (val: number) => css`
  ${getFontSize(val)};
`

export const H1 = generateHeader(1, 'h1')
export const H2 = generateHeader(2, 'h2')
export const H3 = generateHeader(3, 'h3')
export const H4 = generateHeader(4, 'h4')
export const H5 = generateHeader(5, 'h5')
export const H6 = generateHeader(6, 'h6')
