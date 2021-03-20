import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

class WeatherDataResponse {
  constructor(public request: any,
              public location: any,
              public current: any) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class WeatherQueryService {
  private KEY = '93b70fe4a8ffee0606b4f07b7f1de718'; // Todo: Move to a env file

  private URL_BASE = 'http://api.weatherstack.com';

  private _weatherData: BehaviorSubject<WeatherDataResponse> = new BehaviorSubject<WeatherDataResponse>(null);
  private _weatherHistoricalData: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private _httpClient: HttpClient) { }

  private buildEndpoint (query: string, data = 'current'): string {
    return `${this.URL_BASE}/${data}?access_key=${this.KEY}&query=${query}`;
  }

  public async fetchWeatherData (query: string): Promise<any> {
    const { request, location, current } = await this._httpClient.get(this.buildEndpoint(query)).toPromise() as WeatherDataResponse;

    this._weatherData.next(new WeatherDataResponse(request, location, current));
    console.log(this._weatherData.value);

    return this._weatherData.value;
  }

  public async fetchWeatherHistoricalData (query: string): Promise<any> {
    const result = await this._httpClient.get(this.buildEndpoint(query, 'historical')).toPromise() as WeatherDataResponse;

    this._weatherHistoricalData.next(result);
    console.log(this._weatherHistoricalData.value);

    return this._weatherHistoricalData.value;
  }

  get weatherData(): BehaviorSubject<any> {
    return this._weatherData;
  }
}
