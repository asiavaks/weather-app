
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
export interface SearchLocationAPIResult {
    Key: string,
    Type: string,
    Version: number,
    Rank: number,
    LocalizedName: string,
    Country: {
        ID: string,
        LocalizedName: string
    },
    AdministrativeArea: {
        ID: string,
        LocalizedName: string
    }
}

export interface SearchLocation {
    Key: string,
    LocalizedName: string,
}


export interface DayForecastAPIResponse {
    Date: string,
    Temperature: {
        Maximum: {
            Value: number
        }
    },
    Day: {
        Icon: number,
        IconPhrase: string
    }

}
export interface ForecastAPIResponse {
    DailyForecasts: DayForecastAPIResponse[]
}
