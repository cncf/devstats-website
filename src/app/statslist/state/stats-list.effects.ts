import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
  LoadedProjects,
  LoadedProjectStats,
  LoadProjects,
  LoadProjectStats,
  ShowProject,
  StatsListActions,
  StatsListActionTypes,
  StatsListError
} from './stats-list.actions';
import { catchError, concatMap, map, switchMap, tap } from 'rxjs/internal/operators';
import { StatsClientService } from '../stats-client/stats-client.service';
import { defer, of, } from 'rxjs';
import { Project } from '../stats-client/models/Project';
import { statsTransformer } from '../helpers/stats-transformer';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Injectable()
export class StatsListEffects {

  @Effect()
  loadProjects$ = this.actions$.ofType(StatsListActionTypes.LoadProjects).pipe(
    switchMap(() => {
      return this.statsService.projectList().pipe(
        switchMap((projects) => {
          const actions = projects.filter(p => p.name !== 'all')
            .map((project: Project) => new LoadProjectStats(project.name));
          return of(...[new LoadedProjects(projects), new LoadProjectStats('all'), ...actions]);
        }),
        catchError((e) => {
          return of(new StatsListError(e, StatsListActionTypes.LoadProjects));
        })
      );
    })
  );

  @Effect()
  loadStatsOnProject$ = this.actions$.ofType(StatsListActionTypes.LoadProjectStats).pipe(
    concatMap((action: LoadProjectStats) => {
      return this.statsService.project(action.projectName).pipe(
        statsTransformer,
        map((stats) => {
          return new LoadedProjectStats(action.projectName, stats);
        }),
        catchError((e) => {
          return of(new StatsListError(e, StatsListActionTypes.LoadProjectStats));
        })
      );
    })
  );

  @Effect({dispatch: false})
  routeToProjectFragment$ = this.actions$.ofType(StatsListActionTypes.ShowProject)
    .pipe(
      tap((action: ShowProject) => {
      })
    );

  @Effect()
  init$ = defer(() => {
    return of(new LoadProjects);
  });

  constructor(private actions$: Actions,
              private statsService: StatsClientService,
              private router: Router
  ) {
  }
}
