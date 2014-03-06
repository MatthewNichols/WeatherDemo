module Cachematrix.WeatherApp.Models {

    export class WeatherData
    {
        public currentConditions: CurrentConditions = new CurrentConditions();
        public days: Array<DayData>
    }

}