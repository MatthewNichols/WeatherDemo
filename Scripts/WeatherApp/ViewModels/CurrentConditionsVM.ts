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
            this.basicCondition = ko.observable(data.basicCondition);
        }

        public temp: KnockoutObservable<number>;
        public windSpeed: KnockoutObservable<number>;
        public windDirection: KnockoutObservable<enums.Direction>;
        public basicCondition: KnockoutObservable<enums.BasicCondition>;

        public tempFormatted: KnockoutComputed<string> = ko.computed({
            read: () => 
            {
                //TODO: add switching between F and C scales
                return this.temp() + "° F";
            },
            deferEvaluation: true
        });

        public windFormatted: KnockoutComputed<string> = ko.computed({
            read: () => { return this.windSpeed() + " " + enums.Direction[this.windDirection()]; },
            deferEvaluation: true
        });

        public imageIconSrc: KnockoutComputed<string> = ko.computed({
            read: ()=> { return "/Content/images/" + enums.BasicCondition[this.basicCondition()] + ".png"; },
            deferEvaluation: true
        });

        public basicConditionName: KnockoutComputed<string> = ko.computed({
            read: () => { return enums.BasicCondition[this.basicCondition()]; },
            deferEvaluation: true
        });
    }

}