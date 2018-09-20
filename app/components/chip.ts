import { darken } from 'polished'
import styled, { css } from 'styled-components'
import { getFontSize, getInverse, vars } from './style-variables'
import { unselectable } from './utils'

const tagBackgroundColor = vars.background()
const tagColor = vars.text()
const tagRadius = vars.radius
const tagDeleteMargin = '1px'

interface IChipProps {
  size?: 'small' | 'medium' | 'large'
  isRounded?: boolean
  color?: string
}

export const Chip = styled<IChipProps, 'span'>('span')`
  align-items: center;
  background-color: ${tagBackgroundColor};
  border-radius: ${tagRadius};
  color: ${tagColor};
  display: inline-flex;
  ${getFontSize('small')}
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;
  ${unselectable};
  ${(props: IChipProps) =>
    props.color &&
    css`
      background-color: ${props.color};
      color: ${getInverse(props.color)};
    `}
  ${(props: IChipProps) =>
    props.size &&
    css`
      ${getFontSize(props.size)};
    `}
  ${(props: IChipProps) => css`
    &:hover,
    &:focus {
      background-color: ${darken(0.05, props.color || tagBackgroundColor)};
    }
    &:active {
      background-color: ${darken(0.1, props.color || tagBackgroundColor)};
    }
  `}
  ${(props: IChipProps) =>
    props.isRounded &&
    css`
      border-radius: ${vars['radius-rounded']};
    `}
`

interface IChipsProps {
  hasAddons?: boolean
  alignment?: 'left' | 'center' | 'right'
}

export const Chips = styled<IChipsProps, 'div'>('div')`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  ${(props: IChipsProps) =>
    props.alignment === 'center' &&
    css`
      justify-content: center;
    `}
  ${(props: IChipsProps) =>
    props.alignment === 'right' &&
    css`
      justify-content: flex-end;
    `}
  & ${/* sc-selector */ Chip} {
    ${(props: IChipsProps) =>
      props.hasAddons &&
      css`
        margin-right: 0;
      `}
    ${(props: IChipsProps) =>
      props.alignment === 'center' &&
      css`
        margin-right: 0.25em;
        margin-left: 0.25em;
      `}
    margin-bottom: 0.5em;
    &:not(:last-child) {
      margin-right: 0.5em;
    }
    ${(props: IChipsProps) =>
      props.hasAddons &&
      css`
        &:not(:first-child) {
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
        }
        &:not(:last-child) {
          border-bottom-right-radius: 0;
          border-top-right-radius: 0;
        }
      `}
    ${(props: IChipsProps) =>
      props.alignment === 'right' &&
      css`
        &:not(:first-child) {
          margin-left: 0.5em;
        }
        &:not(:last-child) {
          margin-right: 0;
        }
      `}
  }
  &:last-child {
    margin-bottom: -0.5em;
  }
  &:not(:last-child) {
    margin-bottom: 1em;
  }
`
