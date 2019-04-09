import * as React from 'react';
import TextFieldMUI, {TextFieldProps} from '@material-ui/core/TextField';
import {Theme} from '@material-ui/core/styles';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: `${theme.palette.secondary.main} !important`
  },
  underline: {
    borderColor: `${theme.palette.secondary.main} !important`
  }
}));

const TextField: React.FC<TextFieldProps> = props => {
  const classes = useStyles();
  return (
    <TextFieldMUI
      {...props}
      fullWidth
      inputProps={{className: classes.root}}
      InputProps={{classes: classes}}
      InputLabelProps={{className: classes.root}}
    />
  );
};

export default TextField;
