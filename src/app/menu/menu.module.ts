import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { MenuRoutingRoutingModule } from './menu-routing.module';

import { MenuComponent } from './menu.component';

@NgModule({
  imports: [CommonModule, MenuRoutingRoutingModule, SharedModule],
  declarations: [MenuComponent]
})
export class MenuModule {}
