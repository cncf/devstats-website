import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { StatsState } from './stats-list.reducer';


export const featureSelector = createFeatureSelector<StatsState>('statsList');
export const projectStatsSelector = (projectName: string) => createSelector(featureSelector, (stats) => {
  try {
    return stats.projects[projectName].stats;
  } catch (e) {
    return null;
  }
});

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  constructor(private store: Store<{ statsList: StatsState }>) {
  }

  public getProjectStats(projectName: string) {
    return this.store.select(s => projectStatsSelector(projectName)(s));
  }
}
