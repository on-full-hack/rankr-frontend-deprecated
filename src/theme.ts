import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeOptions} from '@material-ui/core/styles/createMuiTheme';

const theme = {
  palette: {
    primary: {
      main: '#6236ff'
    },
    secondary: {
      main: '#ffffff'
    }
  }
};

export default createMuiTheme(theme as ThemeOptions);
