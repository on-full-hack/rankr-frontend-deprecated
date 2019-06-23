import baseStyled, {ThemedStyledInterface} from 'styled-components';

export enum FontSizeEnum {
  DEFAULT,
  SMALL,
  MEDIUM,
  LARGE
}

export const theme = {
  palette: {
    primary: '#6236ff',
    secondary: '#ff1744',
    focus: '#c2185b',
    card: '#ffffff',
    background: '#ECEFF1'
  },
  fontSize: {
    [FontSizeEnum.DEFAULT]: '20px',
    [FontSizeEnum.SMALL]: '12px',
    [FontSizeEnum.MEDIUM]: '16px',
    [FontSizeEnum.LARGE]: '24px'
  }
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
