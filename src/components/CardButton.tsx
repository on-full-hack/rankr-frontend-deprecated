import React from 'react';
import Card from './Card';
import {styled, FontSizeEnum} from '../theme';

type Props = {
  onClick: () => void;
  label: string;
};

const Label = styled.div`
  font-size: ${props => props.theme.fontSize[FontSizeEnum.MEDIUM]};
  color: ${props => props.theme.palette.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardButton: React.FC<Props> = ({onClick, label}) => (
  <Card onClick={onClick}>
    <Label>{label}</Label>
  </Card>
);

export default CardButton;
