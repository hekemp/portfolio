import styled, { css } from 'styled-components';
import { gap, media, sizes } from './utils';

interface IContainerProps {
  isFluid?: boolean
}

export const Container = styled<IContainerProps, 'div'>('div')`
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  ${media.desktop`
    max-width: ${sizes.desktop - 2 * gap}px;
    width: ${sizes.desktop - 2 * gap}px;
    ${(props: IContainerProps) => props.isFluid && css`
      margin-left: ${gap}px;
      margin-right: ${gap}px;
      max-width: none;
      width: auto;
    `}
  `};
  ${media.widescreen`
    max-width: ${sizes.widescreen - 2 * gap}px;
    width: ${sizes.widescreen - 2 * gap}px;
  `};
  ${media.fullhd`
    max-width: ${sizes.fullhd - 2 * gap}px;
    width: ${sizes.fullhd - 2 * gap}px;
  `};
`;
