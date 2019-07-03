import styled from 'styled-components';

type Props = {
  primary?: boolean;
};

export const AppTitle = styled.div<Props>`
  font-family: Courier-new, Courier;
  font-size: 50px;
  color: ${props => (props.primary ? props.theme.palette.primary : '#fff')};
`;

export default AppTitle;
