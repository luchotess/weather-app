import { Component, OnInit } from '@angular/core';
import { WeatherQueryService } from './weather-query.service';

@Component({
  selector: 'app-weather-query',
  templateUrl: './weather-query.component.html',
  styleUrls: ['./weather-query.component.scss']
})
export class WeatherQueryComponent implements OnInit {
  constructor(private _WeatherQueryService: WeatherQueryService) { }
  private initialCity = 'Lima';

  public historicalData: string[] = [];
  public savedData: any[] = [];
  public currentWeatherResult: any = null;
  public currentWeatherHistoricalResult: any = null;

  async ngOnInit(): Promise<any> {
    await this.fetchWeather(this.initialCity);
    this.savedData = localStorage.getItem('savedData') ? JSON.parse(localStorage.getItem('savedData')) : [];
  }

  public async fetchWeather (query: string, addToHistory = true): Promise<any> {
    this.currentWeatherResult = await this._WeatherQueryService.fetchWeatherData(query);
    this.currentWeatherHistoricalResult = await this._WeatherQueryService.fetchWeatherHistoricalData(query); // Not working on free plan
    return addToHistory && this.addHistoricalData(query);
  }

  private addHistoricalData (data: string): void {
    this.historicalData = [ ...this.historicalData, data ];
  }

  public saveCity (city: string, name: string): void {
    this.savedData = [ ...this.savedData, { city, name } ];

    localStorage.setItem('savedData', JSON.stringify(this.savedData));
  }
}
