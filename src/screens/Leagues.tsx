import React from 'react';

import {connect} from 'react-redux';
import LeagueCard from '../components/LeagueCard';
import Layout from '../components/Layout';
import Types from 'MyTypes';
import {RouteComponentProps} from 'react-router';
import {League} from '../API';
import {getLeagues} from '../redux/league/selectors';
import {fetchLeagues} from '../redux/league/actions';

type Props = {
  leagues: League[];
  onFetchLeagues: () => void;
};

type AllProps = Props & RouteComponentProps;

const Leagues: React.FC<AllProps> = ({
  leagues = [],
  onFetchLeagues,
  history
}) => {
  React.useEffect(() => {
    onFetchLeagues();
  }, []);

  return (
    <Layout>
      {leagues.map(league => (
        <LeagueCard
          key={league.id}
          league={league}
          onClick={() => history.push(`/league/${league.id}`)}
        />
      ))}
    </Layout>
  );
};

const mapStateToProps = (state: Types.RootState) => ({
  leagues: getLeagues(state)
});

const dispatchProps = {
  onFetchLeagues: fetchLeagues
};

export default connect(
  mapStateToProps,
  dispatchProps
)(Leagues);
