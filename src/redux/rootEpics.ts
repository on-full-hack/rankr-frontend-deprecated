import {combineEpics} from 'redux-observable';

import counterEpic from './counter/epics';

const epics = combineEpics(...counterEpic);

export default epics;
