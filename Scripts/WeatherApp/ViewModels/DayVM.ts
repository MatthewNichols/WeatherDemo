module Cachematrix.WeatherApp.ViewModels {

    import enums = Cachematrix.WeatherApp.Interfaces.Enums;
    import services = Cachematrix.WeatherApp.Services;
    import models = Cachematrix.WeatherApp.Models;

    export class DayVM {

        constructor(day: models.DayData) {

            this.dayIndex = ko.observable(day.dayIndex);
            this.lowTemp = ko.observable(day.lowTemp);
            this.highTemp = ko.observable(day.highTemp);
            this.basicCondition = ko.observable(day.basicCondition);
            
            this.rawData = day;
        }

        public dayIndex: KnockoutObservable<enums.DayIndex>;
        public lowTemp: KnockoutObservable<number>;
        public highTemp: KnockoutObservable<number>;
        public basicCondition: KnockoutObservable<enums.BasicCondition>;

        //Stash the underlying data to use when we display the details screen
        public rawData: models.DayData;

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
            read: ()=>  "/Content/images/" + enums.BasicCondition[this.basicCondition()] + ".png",
            deferEvaluation: true
        });

        public basicConditionName: KnockoutComputed<string> = ko.computed({
            read: ()=> enums.BasicCondition[this.basicCondition()],
            deferEvaluation: true
        });
    }

}