import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementRoutingModule } from './element-routing.module';

import { ElementHomeComponent } from './element-home/element-home.component';

@NgModule({
  declarations: [ElementHomeComponent],
  imports: [CommonModule, ElementRoutingModule],
  // exports: [ElementHomeComponent],
})
export class ElementModule {}
