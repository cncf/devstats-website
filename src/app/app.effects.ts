import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { defer, of } from 'rxjs';
import { LoadProjects } from './statslist/state/stats-list.actions';


@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}

}
