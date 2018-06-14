import { Inject, Injectable } from '@angular/core';
import { STATS_CLIENT_CONFIG, StatsClientConfig } from './config';
import { Observable } from 'rxjs/index';
import { Project } from './models/Project';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ProjectStats } from './models';

@Injectable({
  providedIn: 'root'
})
export class StatsClientService {

  constructor(@Inject(STATS_CLIENT_CONFIG) private config: StatsClientConfig,
              private Http: HttpClient) {
  }

  projectList(): Observable<Project[]> {
    return this.Http.get<{ projects: Project[] }>(this.config.domain + '/jsons/projects.json').pipe(
      map((ps) => ps.projects)
    )
  }

  project(name: string): Observable<ProjectStats> {
    return this.Http.get<ProjectStats>(this.config.domain + `/jsons/${name}.json`);
  }

  allProjects() {
    this.projectList().pipe(

    )
  }
}
