import { Action } from '@ngrx/store';
import { StatsListActions, StatsListActionTypes } from './stats-list.actions';
import { Project } from '../stats-client/models/Project';

export interface StatsState {
  projects?: Project[]
}

export const initialState: StatsState = {};

export function reducer(state = initialState, action: StatsListActions): StatsState {
  switch (action.type) {

    case StatsListActionTypes.LoadedProjects: {
      return {...state, projects: action.list};
    }

    case StatsListActionTypes.LoadedProjectStats: {
      const projects = state.projects.map(p => {
        if (p.name === action['projectName']) {
          const stats = action['stats'];
          return {...p, stats};
        }
        return p;
      });
      return {...state, projects};
    }

    default:
      return state;
  }
}
