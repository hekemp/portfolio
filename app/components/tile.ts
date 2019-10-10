import styled, { StyledComponent } from 'styled-components'
import { media } from './utils'

interface ITileProps {
  isVertical?: boolean
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}

export const Tile: StyledComponent<'div', any, ITileProps, never> = styled.div<
  ITileProps
>`
  align-items: stretch;
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  min-height: min-content;
  ${(props: ITileProps) =>
    props.isVertical &&
    media.tablet`
      flex-direction: column;
      & > ${/* sc-selector */ ChildTile}:not(:last-child) {
        margin-bottom: 1.5em;
      }
    `}
  ${(props: ITileProps) =>
    props.size &&
    media.tablet`
    flex: none;
    width: ${(props.size / 12) * 100}%;
  `}
  ${media.tablet`
    display: flex;
  `}
`

export const AncestorTile = styled(Tile)`
  margin-left: -0.75em;
  margin-right: -0.75em;
  margin-top: -0.75em;
  &:last-child {
    margin-bottom: -0.75em;
  }
  &:not(:last-child) {
    margin-bottom: 0.75em;
  }
`

export const ChildTile = styled(Tile)`
  margin: 0;
  ${media.tablet`
    display: block;
  `};
`

export const ParentTile = styled(Tile)`
  padding: 0.75em;
`
