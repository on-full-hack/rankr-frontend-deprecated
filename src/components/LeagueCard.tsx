import React from 'react';
import Card from './Card';
import styled from 'styled-components';
import {League} from '../API';

type Props = {
  league: League;
};

const Title = styled.div`
  font-size: 20px;
`;

export const LeagueCard: React.FC<Props> = ({league: {name, discipline}}) => (
  <Card>
    <Title>{`${name} - ${discipline}`}</Title>
  </Card>
);

export default LeagueCard;
