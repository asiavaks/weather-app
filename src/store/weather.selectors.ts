import { createFeatureSelector } from '@ngrx/store';
import { CityWeather } from './weather.interface';
 


export const selectCurrentWeather = createFeatureSelector<CityWeather>('weather');
 

