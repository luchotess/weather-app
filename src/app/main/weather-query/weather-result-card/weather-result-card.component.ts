import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-weather-result-card',
  templateUrl: './weather-result-card.component.html',
  styleUrls: ['./weather-result-card.component.scss']
})
export class WeatherResultCardComponent implements OnInit {
  @Input()
  currentWeatherResult;

  @Output()
  onSaveCity: EventEmitter<any> = new EventEmitter<any>();

  public showName = false;

  constructor() { }

  ngOnInit(): void {
  }

  public saveCity(name: string, city: string): void {
    this.onSaveCity.emit({ name, city });
  }
}
