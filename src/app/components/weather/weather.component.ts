import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CityWeather } from 'src/store/weather.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @Input() cityWeather !: Observable<CityWeather>;
  @Output() onFavorite = new EventEmitter<boolean>();
  favorite: boolean = false;
  subscribtion !: Subscription;
  constructor() { 
  }
  onFavoriteClick() {
    this.favorite = !this.favorite;
    this.onFavorite.emit(this.favorite);
  }
  ngOnInit(): void {
    this.subscribtion = this.cityWeather.subscribe((value:CityWeather) =>{
      return this.favorite = value.isFavorite;
    })
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
