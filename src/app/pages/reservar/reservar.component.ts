import { Component } from '@angular/core';

import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.scss'],
})
export class ReservarComponent {

  showCalendar: boolean = false;

  showHideCalendar(): void {
    this.showCalendar = !this.showCalendar;
  }

}
