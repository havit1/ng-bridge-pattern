import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WidgetModule } from './widget/widget.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WidgetModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
