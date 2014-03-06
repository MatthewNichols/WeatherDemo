module Cachematrix.WeatherApp.Models
{
    import enums = Cachematrix.WeatherApp.Interfaces.Enums;
    
    export class DayData
    {
        public dayIndex: enums.DayIndex;
        public lowTemp: number;
        public highTemp: number;
        public windSpeed: number;
        public windDirection: enums.Direction;
        public basicCondition: enums.BasicCondition;
        public humidity: number;
        public sunrise: string;
        public sunset: string;
        public moonrise: string;
        public moonset: string;
        public moonDesc: string;
    }
} 