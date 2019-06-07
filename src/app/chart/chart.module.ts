import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';

import { ChartRoutingModule } from './chart-routing.module';
import { ChartComponent } from './chart.component';

@NgModule({
  imports: [
    CommonModule,
    ChartRoutingModule,
    NgxEchartsModule
  ],
  declarations: [ChartComponent]
})
export class ChartModule { }
