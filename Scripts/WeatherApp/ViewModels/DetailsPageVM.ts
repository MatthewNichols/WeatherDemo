module Cachematrix.WeatherApp.ViewModels
{
    import enums = Cachematrix.WeatherApp.Interfaces.Enums;
    import interfaces = Cachematrix.WeatherApp.Interfaces;
    import services = Cachematrix.WeatherApp.Services;

    export class DetailsPageVM implements interfaces.IPageVM {

        constructor(day: services.DayData) {
            console.log(day);
            this.windSpeed = ko.observable(day.windSpeed);
            this.windDirection = ko.observable(day.windDirection);
            this.humidity = ko.observable(day.humidity);
            this.sunrise = ko.observable(day.sunrise);
            this.sunset = ko.observable(day.sunset);
            this.moonrise = ko.observable(day.moonrise);
            this.moonset = ko.observable(day.moonset);
            this.moonDesc = ko.observable(day.moonDesc);
        }
        
        public windSpeed: KnockoutObservable<number>;
        public windDirection: KnockoutObservable<enums.Direction>;
        public humidity: KnockoutObservable<number>;
        public sunrise: KnockoutObservable<string>;
        public sunset: KnockoutObservable<string>;
        public moonrise: KnockoutObservable<string>;
        public moonset: KnockoutObservable<string>;
        public moonDesc: KnockoutObservable<string>;

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
