import baseStyled, {ThemedStyledInterface} from 'styled-components';

export const theme = {
  palette: {
    primary: '#6236ff',
    secondary: '#ffffff',
    focus: '#c2185b'
  }
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
