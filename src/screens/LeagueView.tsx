import React from 'react';
import {connect} from 'react-redux';
import Layout from '../components/Layout';
import {RouteComponentProps} from 'react-router';
import {fetchLeagueDetails} from '../redux/league/actions';
import {RootState} from 'MyTypes';
import {League} from '../API';
import {getById} from '../redux/league/selectors';
import CardButton from '../components/CardButton';

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
    <Layout title={props.league.name}>
      <CardButton onClick={() => {}} label="Add match" />
      <CardButton onClick={() => {}} label="Invite friends" />
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
