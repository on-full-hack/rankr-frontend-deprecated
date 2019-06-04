import {styled} from '../theme';

type Props = {
  fullWidth?: boolean;
  secondary?: boolean;
};

export default styled.button<Props>`
  background-color: ${props =>
    props.secondary
      ? props.theme.palette.secondary
      : props.theme.palette.primary};
  color: #fff;
  font-size: 20px;
  width: ${props => (props.fullWidth ? '100%' : 'unset')};
  padding: 20px;
  min-height: 62px;
  :focus {
    outline: none;
  }
  border: none;
  border-radius: 2px;
`;
