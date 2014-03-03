module Cachematrix.WeatherApp.ViewModels 
{
    import enums = Cachematrix.WeatherApp.Interfaces.Enums;

    export class CurrentConditionsVM
    {

        constructor(data: services.CurrentConditions)
        {
            this.temp = ko.observable(data.temp);
            this.windSpeed = ko.observable(data.windSpeed);
            this.windDirection = ko.observable(data.windDirection);

            this.tempFormatted = ko.computed(() =>
            {
                //TODO: add switching between F and C scales
                return this.temp() + "° F";
            });
            this.windFormatted = ko.computed(() =>
            {
                return this.windSpeed() + " " + enums.Direction[this.windDirection()];
            });
        }

        public temp: KnockoutObservable<number>;
        public windSpeed: KnockoutObservable<number>;
        public windDirection: KnockoutObservable<enums.Direction>;

        public tempFormatted: KnockoutComputed<string>;
        public windFormatted: KnockoutComputed<string>;

    }

}