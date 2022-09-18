import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CityWeather, WeatherInfo } from '../store/weather.interface'
import { currentWeather, searchLocationResults, returnedForecast } from './weather.data';
import { DayForecastAPIResponse, CurrentWeatherAPIResult, SearchLocation, SearchLocationAPIResult, ForecastAPIResponse } from './weather.service.interface';
const useAPI = true;
const apiKey = "GYu7UmAVqHoXFz06MdaEHtj4Wj56zQVG"


@Injectable({ providedIn: 'root' })
export class WeatherService {
  constructor(private http: HttpClient) { }

  getForecasts(cityKey: string): Observable<WeatherInfo[]> {
    if (useAPI) {
      const apiResult = this.http.get<ForecastAPIResponse>(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${apiKey}&metric=true`)
        .pipe(
          map((value: ForecastAPIResponse) => {
            console.log(value);
            let result = value.DailyForecasts.map((dayForecast: DayForecastAPIResponse) => {
              const { Day } = dayForecast;
              const iconString: string = Day.Icon < 10 ? `0${Day.Icon}` : `${Day.Icon}`;
              const weatherInfo: WeatherInfo = {
                date: dayForecast.Date,
                description: Day.IconPhrase,
                temperature: dayForecast.Temperature.Maximum.Value,
                iconURL: `https://developer.accuweather.com/sites/default/files/${iconString}-s.png`
              };
              return weatherInfo;
            })
            return result;
          }));
      return apiResult;
    }

    let forecast: ForecastAPIResponse = returnedForecast;
    let returnValue: WeatherInfo[] = forecast.DailyForecasts.map((value: DayForecastAPIResponse): WeatherInfo => {
      const iconString: string = value.Day.Icon < 10 ? `0${value.Day.Icon}` : `${value.Day.Icon}`;
      return {
        date: value.Date,
        description: value.Day.IconPhrase,
        temperature: value.Temperature.Maximum.Value,
        iconURL: `https://developer.accuweather.com/sites/default/files/${iconString}-s.png`
      }
    })
    return of(returnValue);
  }

  getCurrentWeather(cityKey: string, cityName: string): Observable<CityWeather> {

    if (useAPI) {
      const apiResult = this.http.get<CurrentWeatherAPIResult[]>(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}`)
        .pipe(
          map((value: CurrentWeatherAPIResult[]) => {
            console.log(value);

            const icon = value[0].WeatherIcon;
            const iconString: string = icon < 10 ? `0${icon}` : `${icon}`;
            const weatherInfo: WeatherInfo = {
              date: value[0].LocalObservationDateTime,
              description: value[0].WeatherText,
              temperature: value[0].Temperature.Metric.Value,
              iconURL: `https://developer.accuweather.com/sites/default/files/${iconString}-s.png`
            };
            const cityWeather: CityWeather = {
              key: cityKey,
              name: cityName,
              weatherInfo: weatherInfo,
              isFavorite: false
            };
            return cityWeather;
          }))
      return apiResult;
    }
    let name: string = "Israel";
    if (cityKey == '215854') name = 'Tel Aviv';
    if (cityKey == "226396") name = "Tokyo";
    const icon = currentWeather[0].WeatherIcon;
    const iconString: string = icon < 10 ? `0${icon}` : `${icon}`;
    const weatherInfo: WeatherInfo = {
      date: currentWeather[0].LocalObservationDateTime,
      description: currentWeather[0].WeatherText,
      temperature: currentWeather[0].Temperature.Metric.Value,
      iconURL: `https://developer.accuweather.com/sites/default/files/${iconString}-s.png`
    };

    const cityWeather: CityWeather = {
      key: cityKey,
      name: name,
      weatherInfo: weatherInfo,
      isFavorite: false
    }
    return of(cityWeather);
  }

  getSearchLocation(query: string): Observable<SearchLocation[]> {
    if (useAPI) {
      return this.http.get<SearchLocationAPIResult[]>(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${query}`)
        .pipe(map((value: SearchLocationAPIResult[]): SearchLocation[] => {
          console.log(value);
          return value.map((value) => { return { Key: value.Key, LocalizedName: value.LocalizedName }; })
        }));
    }
    if (query.toLocaleLowerCase().startsWith("tel")) searchLocationResults.push({
      "Version": 1,
      "Key": "23336531",
      "Type": "City",
      "Rank": 15,
      "LocalizedName": "Tel Aviv",
      "Country": {
        "ID": "CN",
        "LocalizedName": "Israel"
      },
      "AdministrativeArea": {
        "ID": "ZJ",
        "LocalizedName": "Center"
      }
    })
    const returnValue: SearchLocation[] = searchLocationResults.map((value) => { return { Key: value.Key, LocalizedName: value.LocalizedName }; })
    return of(returnValue);
  }
}
