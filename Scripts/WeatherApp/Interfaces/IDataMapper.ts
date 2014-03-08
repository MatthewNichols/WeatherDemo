module Cachematrix.WeatherApp.Interfaces {

    import models = Cachematrix.WeatherApp.Models;

    export interface IDataMapper
    {
        mapDataToWeatherData(data: any): models.WeatherData;
    }

}