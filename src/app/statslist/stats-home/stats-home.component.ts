import { Component, OnInit } from '@angular/core';
import { StatsService } from '../state/stats.service';
import { Observable } from 'rxjs/index';
import { Project } from '../stats-client/models/Project';

@Component({
  selector: 'stats-home',
  templateUrl: './stats-home.component.html',
  styleUrls: ['./stats-home.component.scss']
})
export class StatsHomeComponent implements OnInit {

  projects$: Observable<Project[]> = this.service.getProjects();
  allStats$: Observable<Project> = this.service.getAllStats();

  constructor(private service: StatsService) {}

  ngOnInit() {
  }

}
