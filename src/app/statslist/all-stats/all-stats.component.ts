import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Project } from '../stats-client/models/Project';
import { Series } from '../helpers/stats-transformer';
import * as d3 from 'd3-shape';
@Component({
  selector: 'all-stats',
  templateUrl: './all-stats.component.html',
  styleUrls: ['./all-stats.component.scss']
})
export class AllStatsComponent implements OnChanges {
  @Input() project: Project;
  @Input() noProjects: number;
  @Input() unit = 'days';
  stats: Series[];
  curve = d3.curveLinear;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.project && changes.project.currentValue) {
      if (changes.project.currentValue.stats && changes.project.currentValue.stats.seriesCommits) {
        this.stats = changes.project.currentValue.stats.seriesCommits.filter(x => x.name === this.unit);
      }
    }
  }

}
