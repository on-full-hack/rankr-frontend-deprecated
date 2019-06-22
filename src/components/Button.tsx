import {styled} from '../theme';

type Props = {
  fullWidth?: boolean;
  secondary?: boolean;
};

type PropsAll = Props & React.HTMLProps<HTMLButtonElement>;

export default styled.button<PropsAll>`
  background-color: ${props =>
    props.secondary
      ? props.theme.palette.secondary
      : props.theme.palette.primary};
  color: #fff;
  font-size: 20px;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.fullWidth ? '100%' : 'unset')};
  padding: 20px;
  :focus {
    outline: none;
  }
  border: none;
  border-radius: 2px;
`;
