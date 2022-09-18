import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';

import { setForecast, setWeather } from './weather.actions';
import { CityWeather } from './weather.interface';

const emptyWeather: CityWeather = {
  key: '',
  name: '',
  weatherInfo: {
    date: '',
    temperature: 0,
    description: '',
    iconURL: ''
  },
  weatherForecast: [],
  isFavorite: false
};

export const initialState: CityWeather = emptyWeather;


export const weatherReducer = createReducer(
  initialState,
  on(setWeather, (state, { cityWeather }) => {
    let temp = { ...cityWeather, weatherForecast: state.weatherForecast }
    return temp;
  }),
  on(setForecast, (state, { weatherForecast }) => {
    let temp = { ...state, weatherForecast: weatherForecast };
    return temp;
  }
  )
);