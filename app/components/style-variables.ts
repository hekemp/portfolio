import { getLuminance, hsl } from 'polished'
import { css } from 'styled-components'
import { media } from './utils'

const initialVars = {
  // COLORS
  black: hsl(0, 0, 0.04),
  'black-bis': hsl(0, 0, 0.07),
  'black-ter': hsl(0, 0, 0.14),

  'grey-darker': hsl(0, 0, 0.21),
  'grey-dark': hsl(0, 0, 0.29),
  grey: hsl(0, 0, 0.48),
  'grey-light': hsl(0, 0, 0.71),
  'grey-lighter': hsl(0, 0, 0.86),

  'white-ter': hsl(0, 0, 0.96),
  'white-bis': hsl(0, 0, 0.98),
  white: hsl(0, 0, 1),

  orange: hsl(14, 1, 0.53),
  yellow: hsl(48, 1, 0.67),
  green: hsl(141, 0.71, 0.48),
  turquoise: hsl(171, 1, 0.41),
  cyan: hsl(2014, 0.86, 0.53),
  blue: hsl(217, 0.71, 0.53),
  purple: hsl(271, 1, 0.71),
  red: hsl(348, 1, 0.61),

  // TYPOGRAPHY
  'family-body': "'Open Sans', sans-serif",
  'family-header': "'Raleway', sans-serif",
  'family-monospace': 'monospace',
  'render-mode': 'optimizeLegibility',

  'weight-light': 300,
  'weight-normal': 400,
  'weight-medium': 500,
  'weight-semibold': 600,
  'weight-bold': 700,

  easing: 'ease-out',
  'radius-small': '2px',
  radius: '4px',
  'radius-large': '6px',
  'radius-rounded': '290486px',
  speed: '86ms',
}

const derivedVars = {
  primary: () => initialVars.purple,
  info: () => initialVars.cyan,
  success: () => initialVars.green,
  warning: () => initialVars.yellow,
  danger: () => initialVars.red,

  light: () => initialVars['white-ter'],
  dark: () => initialVars['grey-darker'],

  // General colors
  background: () => initialVars['white-ter'],
  border: () => initialVars['grey-lighter'],
  'border-hover': () => initialVars['grey-light'],

  // Text Colors
  text: () => initialVars['grey-dark'],
  'text-light': () => initialVars.grey,
  'text-strong': () => initialVars['grey-darker'],
}

export const vars = { ...initialVars, ...derivedVars }

export type Colors =
  | 'white'
  | 'black'
  | 'light'
  | 'dark'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'turquoise'
  | 'cyan'
  | 'blue'
  | 'purple'
  | 'red'

export const getInverse = (color: string) => {
  if (getLuminance(color) > 0.55) {
    return vars.dark()
  } else {
    return vars.light()
  }
}

// TYPOGRAPHY

const bigScale = 1.414 // Augmented 4th
const medScale = 1.25 // Major 3rd
const smallScale = 1.25 // Major 2nd

const sizes = [6, 5, 4, 3, 2, 1, 0, -1]
const smallSizes = sizes.map(x => Math.pow(smallScale, x))
const medSizes = sizes.map(x => Math.pow(medScale, x))
const bigSizes = sizes.map(x => Math.pow(bigScale, x))

export type FontSize = number | 'small' | 'normal' | 'medium' | 'large'

export const getFontSize = (size: FontSize) => {
  let mySize: number
  if (size === 'small') {
    mySize = 7
  } else if (size === 'normal') {
    mySize = 6
  } else if (size === 'medium') {
    mySize = 5
  } else if (size === 'large') {
    mySize = 4
  } else {
    mySize = size
  }
  return css`
    font-size: ${smallSizes[mySize]}em;
    line-height: ${smallScale};
    ${media.tablet`
        font-size: ${medSizes[mySize]}em;
        line-height: ${medScale};
      `} ${media.desktop`
        font-size: ${bigSizes[mySize]}em;
        line-height: ${bigScale};
      `};
  `
}
