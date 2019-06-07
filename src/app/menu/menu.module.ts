import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingRoutingModule } from './menu-routing.module';

import { MenuComponent } from './menu.component';

@NgModule({
  imports: [
    CommonModule,
    MenuRoutingRoutingModule
  ],
  declarations: [MenuComponent]
})
export class MenuModule { }
