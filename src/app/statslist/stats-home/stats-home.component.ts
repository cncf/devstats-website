import { Component, OnInit } from '@angular/core';
import { StatsService } from '../state/stats.service';
import { map, filter } from 'rxjs/operators';
import { tupleToSeries } from '../stats-transformer';

@Component({
  selector: 'stats-home',
  templateUrl: './stats-home.component.html',
  styleUrls: ['./stats-home.component.scss']
})
export class StatsHomeComponent implements OnInit {

  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'Commits';

  constructor(private service: StatsService) {

    this.service.getProjectStats('all').pipe(
      filter(x=>!!x),
      map(all => tupleToSeries(all.commitGraph))
    ).subscribe((data) => {
      this.multi = data;
    });
  }

  ngOnInit() {
  }

}
