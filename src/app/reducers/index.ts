import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { StatsState } from '../statslist/state/stats-list.reducer';

export interface State {
  app: {};
}

export const reducers: ActionReducerMap<State> = {
  app: function (state, action) {
    return state;
  }
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
