import styled, { css } from 'styled-components'
import { media } from './utils';

interface ISectionProps {
  size?: 'small' | 'medium' | 'large'
}

export const Section = styled<ISectionProps, 'section'>('section')`
  padding: 3em 1.5em;
  ${media.desktop`
    ${(props: ISectionProps) => props.size === 'medium' ? css`
      padding: 9em 1.5em;
    ` : props.size === 'large' ? css `
      padding: 18em 1.5em;
    ` : false}
  `}
`