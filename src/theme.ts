import baseStyled, {ThemedStyledInterface} from 'styled-components';

export const theme = {
  palette: {
    primary: {
      main: '#6236ff'
    },
    secondary: {
      main: '#ffffff'
    }
  }
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
