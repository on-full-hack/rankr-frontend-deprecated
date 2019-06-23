import {styled, FontSizeEnum} from '../theme';

type Props = {
  fullWidth?: boolean;
  secondary?: boolean;
  rectangle?: boolean;
  fontSize?: FontSizeEnum;
};

type PropsAll = Props & React.HTMLProps<HTMLButtonElement>;

export default styled.button<PropsAll>`
  background-color: ${props =>
    props.secondary
      ? props.theme.palette.secondary
      : props.theme.palette.primary};
  color: #fff;
  font-size: ${props =>
    props.fontSize
      ? props.theme.fontSize[props.fontSize]
      : props.theme.fontSize[FontSizeEnum.DEFAULT]}
  min-height: ${props => (props.rectangle ? '10px' : '60px')};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.fullWidth ? '100%' : 'unset')};
  padding: ${props => (props.rectangle ? '10px 30px 10px 30px' : '20px')};
  :focus {
    outline: none;
  }
  border: none;
  border-radius: 2px;
`;
