import { CurrentWeatherAPIResult, SearchLocationAPIResult } from "./weather.service.interface";

export const searchLocationResults: SearchLocationAPIResult[] =
    [
        {
            "Version": 1,
            "Key": "226396",
            "Type": "City",
            "Rank": 10,
            "LocalizedName": "Tokyo",
            "Country": {
                "ID": "JP",
                "LocalizedName": "Japan"
            },
            "AdministrativeArea": {
                "ID": "13",
                "LocalizedName": "Tokyo"
            }
        },
        {
            "Version": 1,
            "Key": "106770",
            "Type": "City",
            "Rank": 11,
            "LocalizedName": "Taiyuan",
            "Country": {
                "ID": "CN",
                "LocalizedName": "China"
            },
            "AdministrativeArea": {
                "ID": "SX",
                "LocalizedName": "Shanxi"
            }
        },
        {
            "Version": 1,
            "Key": "106780",
            "Type": "City",
            "Rank": 11,
            "LocalizedName": "Tianjin",
            "Country": {
                "ID": "CN",
                "LocalizedName": "China"
            },
            "AdministrativeArea": {
                "ID": "TJ",
                "LocalizedName": "Tianjin"
            }
        },
        {
            "Version": 1,
            "Key": "58491",
            "Type": "City",
            "Rank": 13,
            "LocalizedName": "Tongren",
            "Country": {
                "ID": "CN",
                "LocalizedName": "China"
            },
            "AdministrativeArea": {
                "ID": "GZ",
                "LocalizedName": "Guizhou"
            }
        },
        {
            "Version": 1,
            "Key": "102324",
            "Type": "City",
            "Rank": 13,
            "LocalizedName": "Tangshan",
            "Country": {
                "ID": "CN",
                "LocalizedName": "China"
            },
            "AdministrativeArea": {
                "ID": "HE",
                "LocalizedName": "Hebei"
            }
        },
        {
            "Version": 1,
            "Key": "59573",
            "Type": "City",
            "Rank": 13,
            "LocalizedName": "Taizhou",
            "Country": {
                "ID": "CN",
                "LocalizedName": "China"
            },
            "AdministrativeArea": {
                "ID": "JS",
                "LocalizedName": "Jiangsu"
            }
        },
        {
            "Version": 1,
            "Key": "60198",
            "Type": "City",
            "Rank": 13,
            "LocalizedName": "Tongliao",
            "Country": {
                "ID": "CN",
                "LocalizedName": "China"
            },
            "AdministrativeArea": {
                "ID": "NM",
                "LocalizedName": "Inner Mongolia"
            }
        },
        {
            "Version": 1,
            "Key": "106571",
            "Type": "City",
            "Rank": 13,
            "LocalizedName": "Tai'an",
            "Country": {
                "ID": "CN",
                "LocalizedName": "China"
            },
            "AdministrativeArea": {
                "ID": "SD",
                "LocalizedName": "Shandong"
            }
        },
        {
            "Version": 1,
            "Key": "58055",
            "Type": "City",
            "Rank": 15,
            "LocalizedName": "Tianshui",
            "Country": {
                "ID": "CN",
                "LocalizedName": "China"
            },
            "AdministrativeArea": {
                "ID": "GS",
                "LocalizedName": "Gansu"
            }
        },
        {
            "Version": 1,
            "Key": "2333653",
            "Type": "City",
            "Rank": 15,
            "LocalizedName": "Taizhou",
            "Country": {
                "ID": "CN",
                "LocalizedName": "China"
            },
            "AdministrativeArea": {
                "ID": "ZJ",
                "LocalizedName": "Zhejiang"
            }
        }
    ];
export const currentWeather: CurrentWeatherAPIResult[] = [
    {
        "LocalObservationDateTime": "2022-09-16T22:08:00+09:00",
        "EpochTime": 1663333680,
        "WeatherText": "Mostly cloudy",
        "WeatherIcon": 38,
        "HasPrecipitation": false,
        "PrecipitationType": null,
        "IsDayTime": false,
        "Temperature": {
            "Metric": {
                "Value": 24.1,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 75,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "MobileLink": "http://www.accuweather.com/en/jp/tokyo/226396/current-weather/226396?lang=en-us",
        "Link": "http://www.accuweather.com/en/jp/tokyo/226396/current-weather/226396?lang=en-us"
    }
];

export const returnedForecast = {
    "Headline": {
        "EffectiveDate": "2022-09-18T08:00:00+03:00",
        "EffectiveEpochDate": 1663477200,
        "Severity": 4,
        "Text": "Pleasant Sunday",
        "Category": "mild",
        "EndDate": null,
        "EndEpochDate": null,
        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
    },
    "DailyForecasts": [
        {
            "Date": "2022-09-17T07:00:00+03:00",
            "EpochDate": 1663387200,
            "Temperature": {
                "Minimum": {
                    "Value": 22.7,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 31.6,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 1,
                "IconPhrase": "Sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 35,
                "IconPhrase": "Partly cloudy",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
        },
        {
            "Date": "2022-09-18T07:00:00+03:00",
            "EpochDate": 1663473600,
            "Temperature": {
                "Minimum": {
                    "Value": 21.9,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 30.4,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 2,
                "IconPhrase": "Mostly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 34,
                "IconPhrase": "Mostly clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
        },
        {
            "Date": "2022-09-19T07:00:00+03:00",
            "EpochDate": 1663560000,
            "Temperature": {
                "Minimum": {
                    "Value": 20.6,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 29.4,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 2,
                "IconPhrase": "Mostly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 34,
                "IconPhrase": "Mostly clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
        },
        {
            "Date": "2022-09-20T07:00:00+03:00",
            "EpochDate": 1663646400,
            "Temperature": {
                "Minimum": {
                    "Value": 21.1,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 29.1,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 2,
                "IconPhrase": "Mostly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 34,
                "IconPhrase": "Mostly clear",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
        },
        {
            "Date": "2022-09-21T07:00:00+03:00",
            "EpochDate": 1663732800,
            "Temperature": {
                "Minimum": {
                    "Value": 21,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Maximum": {
                    "Value": 28.3,
                    "Unit": "C",
                    "UnitType": 17
                }
            },
            "Day": {
                "Icon": 3,
                "IconPhrase": "Partly sunny",
                "HasPrecipitation": false
            },
            "Night": {
                "Icon": 35,
                "IconPhrase": "Partly cloudy",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"
        }
    ]
};