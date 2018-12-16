import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { ExpansionPanelHeaderComponent } from './expansion-panel-header/expansion-panel-header.component';
import { ExpansionPanelBodyComponent } from './expansion-panel-body/expansion-panel-body.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpansionPanelComponent,
    ExpansionPanelHeaderComponent,
    ExpansionPanelBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
