import React from 'react';
import Card from './Card';
import {League} from '../API';
import Button from '../components/Button';
import {styled, FontSizeEnum} from '../theme';
import {connect} from 'react-redux';
import {joinToLeague} from '../redux/league/actions';

type Props = {
  league: League;
  onClickJoin: (id: number) => void;
};

const Title = styled.div`
  font-size: 20px;
`;

export const LeagueCard: React.FC<Props> = ({
  league: {id, name, discipline},
  onClickJoin
}) => (
  <Card>
    <Title>{`${name} - ${discipline}`}</Title>
    <Button
      secondary
      rectangle
      fontSize={FontSizeEnum.SMALL}
      onClick={() => {
        onClickJoin(id);
      }}
    >
      Join
    </Button>
  </Card>
);

const dispatchProps = {
  onClickJoin: joinToLeague
};

export default connect(
  null,
  dispatchProps
)(LeagueCard);
