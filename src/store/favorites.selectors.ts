import { createFeatureSelector } from '@ngrx/store';
import { CityWeather } from './weather.interface';

export const selectFavorites = createFeatureSelector<CityWeather[]>('favorites');