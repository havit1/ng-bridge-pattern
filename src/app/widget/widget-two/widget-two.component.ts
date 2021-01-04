import { Component, OnInit } from '@angular/core';
import { Widget } from '../widget.interface';
import { WIDGET } from '../widget.token';

@Component({
  selector: 'app-widget-two',
  templateUrl: './widget-two.component.html',
  styleUrls: ['./widget-two.component.css'],
  providers: [
    {
      provide: WIDGET,
      useExisting: WidgetTwoComponent,
    },
  ],
})
export class WidgetTwoComponent implements Widget {
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
