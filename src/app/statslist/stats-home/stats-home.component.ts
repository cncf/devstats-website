import { Component, OnDestroy, OnInit } from '@angular/core';
import { StatsService } from '../state/stats.service';
import { Observable } from 'rxjs/index';
import { Project } from '../stats-client/models/Project';
import { ShowProject, StatsState } from '../state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'stats-home',
  templateUrl: './stats-home.component.html',
  styleUrls: ['./stats-home.component.scss']
})
export class StatsHomeComponent implements OnDestroy {
  projects$: Observable<Project[]> = this.service.getProjects();
  allStats$: Observable<Project> = this.service.getAllStats();
  shown: string;
  shownSub = this.service.getShownProject()
    .subscribe((shown) => {
      this.shown = shown;
    });

  constructor(private service: StatsService, private store: Store<StatsState>) {
  }

  showProject(project: string) {
    this.store.dispatch(new ShowProject(project));
  }

  ngOnDestroy() {
    if (this.shownSub) {
      this.shownSub.unsubscribe();
    }
  }
}
