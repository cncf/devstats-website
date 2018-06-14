import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
  LoadedProjects, LoadedProjectStats, LoadProjects, LoadProjectStats, StatsListActions, StatsListActionTypes,
  StatsListError
} from './stats-list.actions';
import { catchError, concatMap, map, switchMap } from 'rxjs/internal/operators';
import { StatsClientService } from '../stats-client/stats-client.service';
import { defer, of, } from 'rxjs';
import { Project } from '../stats-client/models/Project';

@Injectable()
export class StatsListEffects {

  @Effect()
  loadProjects$ = this.actions$.ofType(StatsListActionTypes.LoadProjects).pipe(
    switchMap(() => {
      return this.statsService.projectList().pipe(
        switchMap((projects) => {
          const actions = projects.map((project: Project) => new LoadProjectStats(project.name));
          return of(...[new LoadedProjects(projects), new LoadProjectStats('all')]);
        }),
        catchError((e) => {
          return of(new StatsListError(e, StatsListActionTypes.LoadProjects))
        })
      )
    })
  );

  @Effect()
  loadStatsOnProject$ = this.actions$.ofType(StatsListActionTypes.LoadProjectStats).pipe(
    concatMap((action: LoadProjectStats) => {
      return this.statsService.project(action.projectName).pipe(
        map((stats) => {
          return new LoadedProjectStats(action.projectName, stats)
        }),
        catchError((e) => {
          return of(new StatsListError(e, StatsListActionTypes.LoadProjectStats))
        })
      )
    })
  );

  @Effect()
  init$ = defer(() => {
    return of(new LoadProjects);
  });

  constructor(private actions$: Actions, private statsService: StatsClientService) {
  }
}
