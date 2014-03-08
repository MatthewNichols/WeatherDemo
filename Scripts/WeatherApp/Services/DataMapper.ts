module Cachematrix.WeatherApp.Services
{
    import enums = Cachematrix.WeatherApp.Interfaces.Enums;
    import interfaces = Cachematrix.WeatherApp.Interfaces;
    import models = Cachematrix.WeatherApp.Models;

    export class DataMapper implements interfaces.IDataMapper  {

        constructor()
        {}

        mapDataToWeatherData(data: any): models.WeatherData {
            var output = new models.WeatherData();

            if (data.currentConditions) {
                output.currentConditions.temp = data.currentConditions.temp;
                output.currentConditions.windSpeed = data.currentConditions.windSpeed;
                //Because of the structure of TypeScript enums we need to make sure 
                // that the compiler knows that the incoming value is a string
                output.currentConditions.windDirection = enums.Direction[<string>data.currentConditions.windDirection];
                output.currentConditions.basicCondition = enums.BasicCondition[<string>data.currentConditions.basicCondition];
            }

            output.days = new Array<models.DayData>();
            if (data.days)
            {
                //TODO: can this be cleaner with underscore?
                for (var i = 0; i < data.days.length; i++) {
                    var day = data.days[i];
                    var dayData = new models.DayData();

                    dayData.dayIndex = day.dayIndex;
                    dayData.lowTemp = day.lowTemp;
                    dayData.highTemp = day.highTemp;
                    dayData.windSpeed = day.windSpeed;
                    //Because of the structure of TypeScript enums we need to make sure 
                    // that the compiler knows that the incoming value is a string
                    dayData.windDirection = enums.Direction[<string>day.windDirection];
                    dayData.basicCondition = enums.BasicCondition[<string>day.basicCondition];
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
}