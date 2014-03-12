module Cachematrix.WeatherApp.ViewModels
{
    import enums = Cachematrix.WeatherApp.Interfaces.Enums;
    import interfaces = Cachematrix.WeatherApp.Interfaces;
    import services = Cachematrix.WeatherApp.Services;
    import models = Cachematrix.WeatherApp.Models;

    export class DetailsPageVM implements interfaces.IPageVM {
        
        public init(day: models.DayData) {
            this.windSpeed(day.windSpeed);
            this.windDirection(day.windDirection);
            this.humidity(day.humidity);
            this.sunrise(day.sunrise);
            this.sunset(day.sunset);
            this.moonrise(day.moonrise);
            this.moonset(day.moonset);
            this.moonDesc(day.moonDesc);
        }

        public windSpeed: KnockoutObservable<number> = ko.observable(null);
        public windDirection: KnockoutObservable<enums.Direction> = ko.observable(null);
        public humidity: KnockoutObservable<number> = ko.observable(null);
        public sunrise: KnockoutObservable<string> = ko.observable(null);
        public sunset: KnockoutObservable<string> = ko.observable(null);
        public moonrise: KnockoutObservable<string> = ko.observable(null);
        public moonset: KnockoutObservable<string> = ko.observable(null);
        public moonDesc: KnockoutObservable<string> = ko.observable(null);

        public windFormatted: KnockoutComputed<string> = ko.computed({
            read: () => this.windSpeed() + " MPH " + enums.Direction[this.windDirection()],
            deferEvaluation: true
        });

        public humidityFormatted: KnockoutComputed<string> = ko.computed({
            read: () => this.humidity() * 100 + "%",
            deferEvaluation: true
        });

    } 
    
}
