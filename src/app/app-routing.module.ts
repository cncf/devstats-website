import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatsHomeComponent } from './statslist';

const routes: Routes = [
  {
    path: '',
    component: StatsHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
