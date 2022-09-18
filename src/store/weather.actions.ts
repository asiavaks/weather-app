import { createAction, props } from '@ngrx/store';
import { CityWeather, WeatherInfo } from './weather.interface';

export const setWeather = createAction(
    '[weather Page] setWeather',
    props<{
        cityWeather: CityWeather
    }>()
);

export const setForecast = createAction(
    '[weather Page] setForecast',
    props<{ weatherForecast?: WeatherInfo[] }>()
);