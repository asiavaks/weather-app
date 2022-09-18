import { createReducer, on } from '@ngrx/store';
import { addFavorite, removeFavorite } from './favorites.actions';
import { CityWeather } from './weather.interface';

export const initialState:CityWeather[] = [];

export const favoritesRedcuer = createReducer(
    initialState,
    on(addFavorite,
        (state, { cityWeather }) => {
            const temp = [...state, cityWeather];
            return temp;
        }
    ),
    on(removeFavorite,
        (state, {cityKey}) => {
            const temp = state.filter((value: CityWeather) => value.key != cityKey)
            return temp;
        }
        )
);