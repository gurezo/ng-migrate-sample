import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './menu/menu.module#MenuModule'
  },
  {
    path: 'chart',
    loadChildren: './chart/chart.module#ChartModule'
  },
  {
    path: 'table',
    loadChildren: './table/table.module#TableModule'
  },
  {
    path: '**',
    loadChildren: './not-found/not-found.module#NotFoundModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
