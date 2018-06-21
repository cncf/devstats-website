import {
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { StatsState } from '../statslist/state/stats-list.reducer';

export interface State {
  statsList?: StatsState;
}

export const reducer = function (state, action) {
  return state;
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
