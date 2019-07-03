import * as React from 'react';
import {styled, PaddingEnum} from '../theme';
import {AppBar} from './AppBar';
import Centered from './Centered';

type Props = {
  title?: string;
};

const Container = styled.div`
  background-color: ${props => props.theme.palette.background};
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  height: inherit;
`;

const Layout: React.FC<Props & React.ReactNode> = ({children, title}) => (
  <Container>
    <Centered horizontally padding={PaddingEnum.LARGE}>
      <AppBar title={title} />
    </Centered>
    {children}
  </Container>
);

export default Layout;
