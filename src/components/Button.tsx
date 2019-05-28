import {styled} from '../theme';

export default styled.button`
  background-color: ${props => props.theme.palette.primary.main};
  color: #fff;
  font-size: 20px;
  padding: 20px;
  min-height: 62px;
`;
