import {styled} from '../theme';

type Props = {
  fullWidth?: boolean;
};

export default styled.button<Props>`
  background-color: ${props => props.theme.palette.primary};
  color: #fff;
  font-size: 20px;
  width: ${props => (props.fullWidth ? '100%' : 'unset')};
  padding: 20px;
  min-height: 62px;
  :focus {
    outline: none;
  }
`;
