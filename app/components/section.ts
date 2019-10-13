import styled, { css } from 'styled-components'

import { vars } from './style-variables'
import { media } from './utils'

interface ISectionProps {
  size?: 'small' | 'medium' | 'large'
  color?: string
}

export const Section = styled.section<ISectionProps>`
  padding: calc(1rem + 100px) 1.5rem;
  ${(props: ISectionProps) =>
    props.color
      ? css`
          background-color: ${props.color};
        `
      : css`
          background-color: ${vars.background()};
        `}
  ${media.desktop`
    ${(props: ISectionProps) =>
      props.size === 'small' ? css`padding: 50px 1.5em;` :
      props.size === 'medium'
        ? css`
            padding: calc(9em + 100px) 1.5em;
          `
        : props.size === 'large'
        ? css`
            padding: calc(18em + 100px) 1.5em;
          `
        : false}
  `};
`
