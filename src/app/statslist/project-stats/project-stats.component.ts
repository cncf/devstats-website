import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Project } from '../stats-client/models/Project';
import * as d3 from 'd3-shape';
import { Series } from '../helpers/stats-transformer';

@Component({
  selector: 'project-stats',
  templateUrl: './project-stats.component.html',
  styleUrls: ['./project-stats.component.scss']
})
export class ProjectStatsComponent implements OnChanges {

  @Input() project: Project;
  @Input() unit = 'days';
  stats: Series[];
  curve = d3.curveLinear;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.project && changes.project.currentValue) {
      if (changes.project.currentValue.stats && changes.project.currentValue.stats.seriesCommits) {
        this.stats = changes.project.currentValue.stats.seriesCommits.filter(x => x.name === this.unit);
      }
    }
  }
}
