import { createAction, props } from '@ngrx/store';
import { CityWeather } from './weather.interface';

export const addFavorite = createAction(
    '[Weather] Add favorite',
    props<{cityWeather: CityWeather}>()
);

export const removeFavorite = createAction(
    '[Weather] Remove favorite',
    props<{cityKey: string}>()
);