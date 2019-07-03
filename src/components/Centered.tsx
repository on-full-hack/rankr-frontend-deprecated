import styled from 'styled-components';
import {PaddingEnum, theme} from '../theme';

type Props = {
  horizontally?: boolean;
  vertically?: boolean;
  padding?: PaddingEnum;
};

export default styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: ${({horizontally}) => (horizontally ? 'center' : 'unset')};
  justify-content: ${({vertically}) => (vertically ? 'center' : 'unset')};
  padding: ${({padding}) =>
    padding ? theme.padding[padding] : theme.padding[PaddingEnum.DEFAULT]};
`;
