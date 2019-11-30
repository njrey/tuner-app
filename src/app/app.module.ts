import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstrumentListComponentComponent } from './instrument-list-component/instrument-list-component.component';
import { InstrumentDetailComponent } from './instrument-detail/instrument-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    InstrumentListComponentComponent,
    InstrumentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
