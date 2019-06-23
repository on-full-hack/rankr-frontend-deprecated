import * as React from 'react';
import {connect} from 'react-redux';
import Layout from '../components/Layout';
import {RouteComponentProps} from 'react-router';
import {fetchLeagueDetails} from '../redux/league/actions';
import {RootState} from 'MyTypes';
import {League} from '../API';

type RouteInfo = {
  id: string;
};

type Props = {
  onFetchLeagueDetails: (id: number) => void;
  league?: League;
} & RouteComponentProps<RouteInfo>;

const LeagueView: React.FC<Props> = props => {
  console.log('props: ', props);
  React.useEffect(() => {
    props.onFetchLeagueDetails(parseInt(props.match.params.id));
  }, []);

  if (!props.league) return <div>loading...</div>;

  return (
    <Layout>
      <div>{props.league.name}</div>>
    </Layout>
  );
};

const dispatchProps = {
  onFetchLeagueDetails: fetchLeagueDetails
};

const mapDispatchToProps = (state: RootState, ownProps: Props) => ({
  league: state.leagues.all.get(parseInt(ownProps.match.params.id))
});

export default connect(
  mapDispatchToProps,
  dispatchProps
)(LeagueView);
