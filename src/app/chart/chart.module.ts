import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';

import { SharedModule } from '../shared/shared.module';
import { ChartRoutingModule } from './chart-routing.module';

import { ChartComponent } from './chart.component';

@NgModule({
  imports: [CommonModule, ChartRoutingModule, NgxEchartsModule, SharedModule],
  declarations: [ChartComponent]
})
export class ChartModule {}
