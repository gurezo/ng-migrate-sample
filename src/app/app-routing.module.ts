import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./menu/menu.module').then(mod => mod.MenuModule)
  },
  {
    path: 'chart',
    loadChildren: () => import('./chart/chart.module').then(mod => mod.ChartModule)
  },
  {
    path: 'table',
    loadChildren: () => import('./table/table.module').then(mod => mod.TableModule)
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then(mod => mod.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
