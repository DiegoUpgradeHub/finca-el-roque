import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

import { ReservarRoutingModule } from './reservar-routing.module';

import { SharedModule } from '../shared.module';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReservarRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    JsonPipe
  ]
})
export class ReservarModule { }
