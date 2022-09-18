

export interface WeatherInfo {
    date: string,
    temperature: number,
    description: string
    iconURL: string
}

export interface CurrentWeatherAPIResult {
    LocalObservationDateTime: string,
    EpochTime: number,
    WeatherText: string
    WeatherIcon: number
    HasPrecipitation: boolean,
    PrecipitationType: null,
    IsDayTime: boolean,
    Temperature: {
        Metric: {
            Value: number,
            Unit: string,
            UnitType: number
        },
        Imperial: {
            Value: number,
            Unit: string,
            UnitType: number
        }
    },
    MobileLink: string,
    Link: string
}

export interface SearchLocation {
    Key: string,
    LocalizedName: string,
}

export interface CityWeather {
    key: string,
    name: string,
    weatherInfo: WeatherInfo,
    weatherForecast?: WeatherInfo[],
    isFavorite: boolean,
}

