import * as React from 'react';
import {connect} from 'react-redux';
import Layout from '../components/Layout';
import {RouteComponentProps} from 'react-router';
import {fetchLeagueDetails} from '../redux/league/actions';
import {RootState} from 'MyTypes';
import {League} from '../API';
import {getById} from '../redux/league/selectors';

type RouteInfo = {
  id: string;
};

type Props = {
  onFetchLeagueDetails: (id: number) => void;
  league?: League;
} & RouteComponentProps<RouteInfo>;

const LeagueView: React.FC<Props> = props => {
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
  league: getById(state, parseInt(ownProps.match.params.id))
});

export default connect(
  mapDispatchToProps,
  dispatchProps
)(LeagueView);
