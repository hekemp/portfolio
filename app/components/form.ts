import { rgba } from 'polished'
import styled, { css } from 'styled-components'

import { Icon } from './icon'
import { getFontSize, vars } from './style-variables'

// CONTROL VARS
const controlRadius = vars.radius
const controlBorderWidth = '1px'
const controlPaddingVertical = `calc(0.375em - ${controlBorderWidth})`
const controlPaddingHorizontal = `calc(0.625em - ${controlBorderWidth})`

// INPUT VARS
const inputColor = vars['grey-darker']
const inputBackgroundColor = vars.white
const inputBorderColor = vars['grey-lighter']
const inputShadow = `inset 0 1px 2px ${rgba(vars.black, 0.1)}`
const inputHoverColor = vars['grey-darker']
const inputHoverBorderColor = vars['grey-light']
const inputFocusColor = vars['grey-darker']
const inputFocusBorderColor = vars.purple
const inputFocusBoxShadowSize = `0 0 0 0.125em`
const inputFocusBoxShadowColor = rgba(vars.purple, 0.25)
const inputDisabledColor = vars['text-light']()
const inputDisabledBackgroundColor = vars.background()
const inputDisabledBorderColor = vars.background()

const inputArrow = vars.purple

const inputIconColor = vars['grey-lighter']
const inputIconActiveColor = vars.grey

const inputRadius = vars.radius

const labelColor = vars['grey-darker']
const labelWeight = vars['weight-bold']
const helpSize = getFontSize('small')

const control = css`
  appearance: none;
  align-items: center;
  border: ${controlBorderWidth} solid transparent;
  border-radius: ${controlRadius};
  box-shadow: none;
  display: inline-flex;
  height: 2.25em;
  justify-content: flex-start;
  ${getFontSize('normal')};
  padding-bottom: ${controlPaddingVertical};
  padding-bottom: ${controlPaddingVertical};
  padding-left: ${controlPaddingHorizontal};
  padding-right: ${controlPaddingHorizontal};
  position: relative;
  vertical-align: top;
  &:focus,
  &:active {
    outline: none;
  }
  &[disabled] {
    cursor: not-allowed;
  }
`

const input = css`
  ${control};
  background-color: ${inputBackgroundColor};
  border-color: ${inputBorderColor};
  color: ${inputColor};
  &::placeholder {
    color: ${rgba(inputColor, 0.3)};
  }
  &:hover {
    border-color: ${inputHoverBorderColor};
  }
  &:focus,
  &:active {
    border-color: ${inputFocusBorderColor};
    box-shadow: ${inputFocusBoxShadowSize} ${inputFocusBoxShadowColor};
  }
  &[disabled] {
    background-color: ${inputDisabledBackgroundColor};
    border-color: ${inputDisabledBorderColor};
    box-shadow: none;
    color: ${inputDisabledColor};
    &::placeholder {
      color: ${rgba(inputDisabledColor, 0.3)};
    }
  }
`

interface IInputProps {
  color?: string
  isFullwidth?: boolean
  isInline?: boolean
  isRounded?: boolean
  isStatic?: boolean
}

export const Input = styled<IInputProps, 'input'>('input')`
  ${input};
  box-shadow: ${inputShadow};
  max-width: 100%;
  width: 100%;
  &[readonly] {
    box-shadow: none;
  }
  ${(props: IInputProps) =>
    props.color &&
    css`
      border-color: ${props.color};
      &:focus,
      &:active {
        box-shadow: ${inputFocusBoxShadowSize} ${rgba(props.color, 0.25)};
      }
    `}
  ${(props: IInputProps) =>
    props.isFullwidth &&
    css`
      display: block;
      width: 100%;
    `}
  ${(props: IInputProps) =>
    props.isInline &&
    css`
      display: inline;
      width: auto;
    `}
  ${(props: IInputProps) =>
    props.isRounded &&
    css`
      border-radius: ${vars['radius-rounded']};
      padding-left: 1em;
      padding-right: 1em;
    `}
  ${(props: IInputProps) =>
    props.isStatic &&
    css`
      background-color: transparent;
      border-color: transparent;
      box-shadow: none;
      padding-left: 0;
      padding-right: 0;
    `}
`

// TODO: Select

export const Label = styled.label`
  color: ${labelColor};
  display: block;
  ${getFontSize('normal')};
  font-weight: ${labelWeight};
  &:not(:last-child) {
    margin-bottom: 0.5em;
  }
`

export const Help = styled.p`
  display: block;
  ${helpSize};
  margin-top: 0.25rem;
  /* TODO: Colors */
`

interface IFieldProps {
  hasAddons?: boolean
}

export const Field = styled<IFieldProps, 'div'>('div')`
  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`

interface IControlProps {
  hasIcon?: boolean
}

export const Control = styled<IControlProps, 'div'>('div')`
  clear: both;
  ${getFontSize('normal')};
  position: relative;
  text-align: left;
  ${(props: IControlProps) =>
    props.hasIcon &&
    css`
      ${/* sc-selector */ Input} {
        padding-left: 2.25em;
        &:focus {
          & ~ ${/* sc-selector */ Icon} {
            color: ${inputIconActiveColor};
          }
        }
      }
      ${/* sc-selector */ Icon} {
        color: ${inputIconColor};
        height: 2.25em;
        pointer-events: none;
        position: absolute;
        top: 0;
        width: 2.25em;
        z-index: 4;
        left: 0;
      }
    `};
`
