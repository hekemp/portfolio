import styled from 'styled-components';
import { gap, media, sizes } from './utils';

export const Container = styled.div`
  margin: 0 auto;
  position: relative;
  display: flex;
  ${media.tablet`
    max-width: ${sizes.tablet - 2 * gap}px;
    width: ${sizes.desktop - 2 * gap}px;
  `};
  ${media.desktop`
    max-width: ${sizes.desktop - 2 * gap}px;
    width: ${sizes.desktop - 2 * gap}px;
  `};
  ${media.widescreen`
    max-width: ${sizes.widescreen - 2 * gap}px;
    width: ${sizes.widescreen - 2 * gap}px;
  `};
  ${media.fullhd`
    max-width: ${sizes.fullhd}px;
    width: ${sizes.fullhd}px;
  `};
`;
