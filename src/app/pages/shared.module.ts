import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//i18n
import { TranslateModule } from '@ngx-translate/core';

//Components
import { ActividadesComponent } from './actividades/actividades.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { IntroComponent } from './intro/intro.component';
import { MapaComponent } from './mapa/mapa.component';
import { ReservarComponent } from './reservar/reservar.component';
import { ReviewBookingComponent } from './review-booking/review-booking.component';
import { ReviewGoogleComponent } from './review-google/review-google.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';


//Angular material
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatHint } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ActividadesComponent,
    GaleriaComponent,
    IntroComponent,
    MapaComponent,
    ReservarComponent,
    ReviewBookingComponent,
    ReviewGoogleComponent,
    TestimoniosComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    //in18
    TranslateModule,
    //Angular material
    BrowserAnimationsModule,
    BrowserModule,
    NoopAnimationsModule,
    MatDatepickerModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
  ],
  exports: [
    ActividadesComponent,
    GaleriaComponent,
    IntroComponent,
    MapaComponent,
    ReservarComponent,
    ReviewBookingComponent,
    ReviewGoogleComponent,
    TestimoniosComponent,
  ]
})
export class SharedModule { }
