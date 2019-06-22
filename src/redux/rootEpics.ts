import {combineEpics} from 'redux-observable';

import counterEpic from './counter/epics';
import leagueEpic from './league/epics';

const epics = combineEpics(...counterEpic, ...leagueEpic);

export default epics;
