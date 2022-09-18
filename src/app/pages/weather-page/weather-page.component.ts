import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CityWeather, WeatherInfo } from '../../../store/weather.interface';
import { setForecast, setWeather } from '../../../store/weather.actions';
import { selectCurrentWeather } from '../../../store/weather.selectors';
import { FormControl } from '@angular/forms';
import { WeatherService } from '../../../services/weather.service';
import { CurrentWeatherAPIResult, SearchLocation } from 'src/services/weather.service.interface';
import { addFavorite, removeFavorite } from 'src/store/favorites.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss']
})
export class WeatherPageComponent implements OnInit {
  currentWeather$ = this.store.select(selectCurrentWeather);
  currentWeather !: CityWeather;
  currentInput: string = '';
  locations: SearchLocation[] = [];
  myControl = new FormControl('');
  options: string[] = [];
  filteredOptions!: SearchLocation[];
  selectedCityWeather: CurrentWeatherAPIResult | null = null;
  subscriptions: Subscription[] = [];
  firstTime: boolean = true;
  constructor(private store: Store, private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.currentWeather$.subscribe((value: CityWeather) => {
      this.currentWeather = value;
      if (this.firstTime && !value.key) {
        this.firstTime = false;
        this.updateWeatherByCity('215854', 'Tel Aviv');
      }
    }
    ));
  }

  onFavorite(newValue: boolean) {
    this.store.dispatch(setWeather({ cityWeather: { ...this.currentWeather, isFavorite: newValue } }))
    if (newValue) {
      this.store.dispatch(addFavorite({ cityWeather: this.currentWeather }))
    }
    else {
      this.store.dispatch(removeFavorite({ cityKey: this.currentWeather.key }));
    }


  }
  inputChange(event: Event | string) {
    this.updateLocationByQuery(event as string)
  }

  updateLocationByQuery(query: string) {
    this.subscriptions.push(this.weatherService.getSearchLocation(query).subscribe((locations) => {
      this.locations = locations;
      this.filteredOptions = this._filter(query || '');
      console.log(this.locations);
    }))
  }
  private _filter(value: string): SearchLocation[] {
    const filterValue = value.toLowerCase();
    return this.locations.filter((location) => location.LocalizedName.toLowerCase().startsWith(filterValue));
  }

  updateWeatherByCity(cityKey: string, cityName: string) {
    this.subscriptions.push(this.weatherService.getCurrentWeather(cityKey, cityName)
      .subscribe((cityWeather: CityWeather) => {
        this.store.dispatch(setWeather({ cityWeather }))
      }))
    this.subscriptions.push(this.weatherService.getForecasts(cityKey)
      .subscribe((weatherForecast: WeatherInfo[]) => this.store.dispatch(setForecast({ weatherForecast }))));
  }

  locationClick(event: SearchLocation) {
    this.updateWeatherByCity(event.Key, event.LocalizedName)
  }

  ngOnDestroy() {
    this.subscriptions.forEach((value: Subscription) => value.unsubscribe());
  }
}
