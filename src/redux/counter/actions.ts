import {action} from 'typesafe-actions';
import * as types from './constants';

export const increment = () => action(types.INCREMENT);
