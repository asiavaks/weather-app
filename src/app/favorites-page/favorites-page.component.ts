import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectFavorites } from 'src/store/favorites.selectors';
import { setForecast, setWeather } from 'src/store/weather.actions';
import { CityWeather } from 'src/store/weather.interface';
@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {
  selectFavorites$ = this.store.select(selectFavorites);
  constructor(private store: Store, private router: Router ) { }

  ngOnInit(): void {
  }

  onSelectCityWeather(cityWeather: CityWeather){
     this.store.dispatch(setWeather({ cityWeather }))
     const {weatherForecast} = cityWeather;      
     this.store.dispatch(setForecast({ weatherForecast }))
     this.router.navigate(['/']);
  }

}
