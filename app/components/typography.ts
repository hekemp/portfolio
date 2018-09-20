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

export const Text = styled<ITextProps, 'p'>('p')`
  ${TextBase};
  margin-top: 0em;
  margin-bottom: 1em;

  font-family: ${vars['family-body']};

  color: ${(props: ITextProps) => (props.color ? props.color : vars["grey-darker"])};
  text-align: ${(props: ITextProps) =>
    props.alignment ? props.alignment : 'left'};
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
  color: ${(props: ITextProps) => (props.color ? props.color : vars.black)};
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
