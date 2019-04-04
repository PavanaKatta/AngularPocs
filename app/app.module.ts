import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { PopupModule } from '@progress/kendo-angular-popup';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import {OverlayComponent } from './overlay.component';

@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule, GridModule, ButtonsModule, PopupModule, MatCardModule ],
  declarations: [ AppComponent, OverlayComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
