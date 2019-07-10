import {combineEpics} from 'redux-observable';

import counterEpic from './counter/epics';
import leagueEpic from './league/epics';
import loginEpic from './login/epics';

const epics = combineEpics(...counterEpic, ...leagueEpic, ...loginEpic);

export default epics;
