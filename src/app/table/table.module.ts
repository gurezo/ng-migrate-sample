import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';

@NgModule({
  imports: [
    CommonModule,
    DataTablesModule,
    TableRoutingModule
  ],
  declarations: [TableComponent]
})
export class TableModule { }
