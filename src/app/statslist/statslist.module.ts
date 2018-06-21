import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectStatsComponent } from './project-stats/project-stats.component';
import { AllStatsComponent } from './all-stats/all-stats.component';
import { StatsHomeComponent } from './stats-home/stats-home.component';
import { StatsClientService } from './stats-client/stats-client.service';
import { StoreModule } from '@ngrx/store';
import * as fromStatsList from './state';
import { EffectsModule } from '@ngrx/effects';
import { StatsListEffects } from './state';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    StoreModule.forFeature('statsList', fromStatsList.reducer),
    EffectsModule.forFeature([StatsListEffects]),
    NgxChartsModule,
    MatCardModule
  ],
  providers: [
    StatsClientService
  ],
  declarations: [ProjectStatsComponent, AllStatsComponent, StatsHomeComponent],
  exports: [StatsHomeComponent]
})
export class StatslistModule { }
