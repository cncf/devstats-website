import { Action } from '@ngrx/store';
import { Project } from '../stats-client/models/Project';
import { ProjectStats } from '../stats-client/models/ProjectStats';

export enum StatsListActionTypes {
  LoadProjects = '[StatsList] Load Projects',
  LoadedProjects = '[StatsList] Loaded Projects',
  StatsListError = '[StatsList] Error',
  LoadProjectStats = '[StatsList] Load Project Stats',
  LoadedProjectStats = '[StatsList] Loaded Project Stats',
  ShowProject = '[StatsList] Show Project'
}

export class LoadProjects implements Action {
  readonly type = StatsListActionTypes.LoadProjects;
}

export class LoadedProjects implements Action {
  readonly type = StatsListActionTypes.LoadedProjects;

  constructor(public list: Project[]) {

  }
}

export class StatsListError implements Action {
  readonly type = StatsListActionTypes.StatsListError;

  constructor(public error: Error, public operation: StatsListActionTypes) {
  }

}


export class LoadProjectStats implements Action {
  readonly type = StatsListActionTypes.LoadProjectStats;

  constructor(public projectName: string) {
  }
}

export class LoadedProjectStats implements Action {
  readonly type = StatsListActionTypes.LoadedProjectStats;

  constructor(public projectName: string, public stats: ProjectStats) {
  }
}

export class ShowProject implements Action {
  readonly type = StatsListActionTypes.ShowProject;

  constructor(public projectName: string) {
  }
}

export type StatsListActions =
  LoadProjects
  | LoadedProjects
  | StatsListError
  | LoadProjectStats
  | LoadedProjectStats
  | ShowProject;
