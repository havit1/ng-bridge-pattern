import {
  AfterContentInit,
  Component,
  ContentChild,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Widget } from '../widget.interface';
import { WIDGET } from '../widget.token';

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.css'],
})
export class WidgetWrapperComponent implements OnInit, AfterContentInit {
  @ContentChild(WIDGET, { static: true }) widget!: Widget;

  constructor() {}

  ngOnInit(): void {
    this.widget.load();
  }

  ngAfterContentInit() {
    console.log(this.widget);
  }

  onReload() {
    this.widget.reload();
  }
}
