import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DemoService } from './demo.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { EnviComponent } from './envi/envi.component';
import { GasComponent } from './gas/gas.component';
import { FlowComponent } from './flow/flow.component';


@NgModule({
  declarations: [
    AppComponent,
    EnviComponent,
    GasComponent,
    FlowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    DemoService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
