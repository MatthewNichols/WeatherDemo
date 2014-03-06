module Cachematrix.WeatherApp.Models
{
    import enums = Cachematrix.WeatherApp.Interfaces.Enums;

    export class CurrentConditions
    {
        public temp: number;
        public windSpeed: number;
        public windDirection: enums.Direction;
        public basicCondition: enums.BasicCondition;
    }

} 