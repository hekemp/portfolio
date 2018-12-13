import * as React from 'react'
import styled, { css } from 'styled-components'
import { vars } from './style-variables'

interface IStyledImageProps {
  isRounded?: boolean
  hasRoundedCorners?: boolean
}

const StyledImage = styled<IStyledImageProps, 'img'>('img')`
  display: block;
  position: relative;
  height: auto;
  width: 100%;
  ${(props: IStyledImageProps) => props.isRounded && css`
    border-radius: ${vars["radius-rounded"]};
  `}
  ${(props: IStyledImageProps) => props.hasRoundedCorners && css`
    border-radius: ${vars["radius-large"]};
  `}
  margin-top: 1em;
  margin-bottom: 1em;
`

interface IImageProps {
  alt: string
  src: string
}

export const Image = (props: IStyledImageProps & IImageProps) => (
  <picture>
    {/* Make the webp be the editted / substringed. Pass in the default (jpg/gif/png) */}
    <source srcSet={props.src} type="image/webp" />
    <source srcSet={props.src.substring(0,props.src.length - 4) + "png"} type="image/png" />
    <StyledImage {...props} />
  </picture>
)