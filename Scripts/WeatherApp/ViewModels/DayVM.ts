module Cachematrix.WeatherApp.ViewModels {

    import enums = Cachematrix.WeatherApp.Interfaces.Enums;
    import services = Cachematrix.WeatherApp.Services;

    export class DayVM {

        constructor(day: services.DayData) {

            this.dayIndex = ko.observable(day.dayIndex);
            this.lowTemp = ko.observable(day.lowTemp);
            this.highTemp = ko.observable(day.highTemp);
            this.windSpeed = ko.observable(day.windSpeed);
            this.windDirection = ko.observable(day.windDirection);
            this.basicCondition = ko.observable(day.basicCondition);
            this.humidity = ko.observable(day.humidity);
            this.sunrise = ko.observable(day.sunrise);
            this.sunset = ko.observable(day.sunset);
            this.moonrise = ko.observable(day.moonrise);
            this.moonset = ko.observable(day.moonset);
            this.moonDesc = ko.observable(day.moonDesc);
        }

        public dayIndex: KnockoutObservable<enums.DayIndex>;
        public lowTemp: KnockoutObservable<number>;
        public highTemp: KnockoutObservable<number>;
        public windSpeed: KnockoutObservable<number>;
        public windDirection: KnockoutObservable<enums.Direction>;
        public basicCondition: KnockoutObservable<enums.BasicCondition>;
        public humidity: KnockoutObservable<number>;
        public sunrise: KnockoutObservable<string>;
        public sunset: KnockoutObservable<string>;
        public moonrise: KnockoutObservable<string>;
        public moonset: KnockoutObservable<string>;
        public moonDesc: KnockoutObservable<string>;

        public highTempFormatted: KnockoutComputed<string> = ko.computed({
            read: ()=> { return this.highTemp() + "° F"; },
            deferEvaluation : true
        });

        public lowTempFormatted: KnockoutComputed<string> = ko.computed(
        {
            read: () => { return this.lowTemp() + "° F"; },
            deferEvaluation : true
        });

        public imageIconSrc: KnockoutComputed<string> = ko.computed({
            read: ()=> { return "/Content/images/" + enums.BasicCondition[this.basicCondition()] + ".png";
            },
            deferEvaluation: true
        });

        public basicConditionName: KnockoutComputed<string> = ko.computed({
            read: () => { return enums.BasicCondition[this.basicCondition()]; },
            deferEvaluation: true
        });
    }

}