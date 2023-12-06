import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

import { ReservarRoutingModule } from './reservar-routing.module';

import { SharedModule } from '../shared.module';

import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReservarRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    JsonPipe
  ]
})
export class ReservarModule { }
