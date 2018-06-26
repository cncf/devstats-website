import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface State {
  app: {};
}

export function app(state, action) {
  return state;
}

export const reducers: ActionReducerMap<State> = {
  app
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
