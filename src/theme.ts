import baseStyled, {ThemedStyledInterface} from 'styled-components';

export const theme = {
  palette: {
    primary: '#6236ff',
    secondary: '#ff1744',
    focus: '#c2185b',
    card: '#ffffff',
    background: '#ECEFF1'
  }
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
