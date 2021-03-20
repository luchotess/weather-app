import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherQueryComponent } from './weather-query.component';
import {RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { WeatherResultCardComponent } from './weather-result-card/weather-result-card.component';



@NgModule({
  declarations: [WeatherQueryComponent, WeatherResultCardComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    RouterModule.forChild([
      {
        path: '',
        component: WeatherQueryComponent
      }
    ])
  ]
})
export class WeatherQueryModule { }
