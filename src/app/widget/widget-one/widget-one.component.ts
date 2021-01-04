import { Component, OnInit } from '@angular/core';
import { Widget } from '../widget.interface';
import { WIDGET } from '../widget.token';

@Component({
  selector: 'app-widget-one',
  templateUrl: './widget-one.component.html',
  styleUrls: ['./widget-one.component.css'],
  providers: [
    {
      provide: WIDGET,
      useExisting: WidgetOneComponent,
    },
  ],
})
export class WidgetOneComponent implements Widget {
  constructor() {}

  loading = false;

  load() {
    this.loading = true;
    setTimeout(() => (this.loading = false), 3000);
  }

  reload() {
    this.load();
  }
}
