import * as React from 'react';
import TextFieldMUI, {TextFieldProps} from '@material-ui/core/TextField';
import styled from 'styled-components';

const StyledTextField = styled(TextFieldMUI)`
  input {
    color: #fff;
    border-color: #fff !important;
  }
  label {
    color: #fff !important;
  }
`;

const TextField: React.FC<TextFieldProps> = props => (
  <StyledTextField {...props} fullWidth />
);

export default TextField;
