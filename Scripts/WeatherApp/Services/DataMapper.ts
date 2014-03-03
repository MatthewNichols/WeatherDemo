module Cachematrix.WeatherApp.Services
{
    import enums = Cachematrix.WeatherApp.Interfaces.Enums;
    import interfaces = Cachematrix.WeatherApp.Interfaces;

    export class DataMapper  {
        constructor()
        {}

        mapDataToWeatherData(data: any): WeatherData {
            var output = new WeatherData();

            if (data.currentConditions) {
                output.currentConditions.temp = data.currentConditions.temp;
                output.currentConditions.windSpeed = data.currentConditions.windSpeed;
                //Because of the structure of TypeScript enums we need to make sure 
                // that the compiler knows that the incoming value is a string
                output.currentConditions.windDirection = enums.Direction[<string>data.currentConditions.windDirection];
            }

            output.days = new Array<DayData>();
            if (data.days)
            {
                for (var i = 0; i < data.days.length; i++) {
                    var day = data.days[i];
                    var dayData = new DayData();

                    dayData.dayIndex = day.dayIndex;
                    dayData.lowTemp = day.lowTemp;
                    dayData.highTemp = day.highTemp;
                    dayData.windSpeed = day.windSpeed;
                    //Because of the structure of TypeScript enums we need to make sure 
                    // that the compiler knows that the incoming value is a string
                    dayData.windDirection = enums.Direction[<string>day.windDirection];
                    dayData.humidity = day.humidity;
                    dayData.sunrise = day.sunrise;
                    dayData.sunset = day.sunset;
                    dayData.moonrise = day.moonrise;
                    dayData.moonset = day.moonset;
                    dayData.moonDesc = day.moonDesc;

                    output.days[output.days.length] = dayData;
                }
            }

            return output;
        }    
    }
    
    export class WeatherData
    {
        currentConditions: CurrentConditions = new CurrentConditions();
        days: Array<DayData>
    }

    export class CurrentConditions
    {
        temp: number;
        windSpeed: number;
        windDirection: enums.Direction;
    }

    export class DayData
    {
        dayIndex: enums.DayIndex;
        lowTemp: number;
        highTemp: number;
        windSpeed: number;
        windDirection: enums.Direction;
        humidity: number;
        sunrise: string;
        sunset: string;
        moonrise: string;
        moonset: string;
        moonDesc: string;
    }
}