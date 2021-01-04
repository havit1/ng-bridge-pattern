import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetOneComponent } from './widget-one/widget-one.component';
import { WidgetTwoComponent } from './widget-two/widget-two.component';
import { WidgetWrapperComponent } from './widget-wrapper/widget-wrapper.component';

@NgModule({
  declarations: [
    WidgetOneComponent,
    WidgetTwoComponent,
    WidgetWrapperComponent,
  ],
  imports: [CommonModule],
  exports: [WidgetOneComponent, WidgetTwoComponent, WidgetWrapperComponent],
})
export class WidgetModule {}
