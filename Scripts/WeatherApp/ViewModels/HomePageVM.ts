module Cachematrix.WeatherApp.ViewModels
{
    import enums = Cachematrix.WeatherApp.Interfaces.Enums;
    import interfaces = Cachematrix.WeatherApp.Interfaces;
    import services = Cachematrix.WeatherApp.Services;
    import models = Cachematrix.WeatherApp.Models;

    export class HomePageVM implements interfaces.IPageVM
    {
        constructor(data: models.WeatherData) {
            this.currentConditions = new CurrentConditionsVM(data.currentConditions);

            this.days = _.map(data.days, (day)=> {
                return new DayVM(day);
            });
        }

        public currentConditions: CurrentConditionsVM;
        public days: Array<DayVM>

        public today: KnockoutComputed<DayVM> = ko.computed({
            read: () => { return this.days[0]; },
            deferEvaluation: true
        });

        public tomorrow: KnockoutComputed<DayVM> = ko.computed({
            read: () => { return this.days[1]; },
            deferEvaluation: true
        });

        public dayAfterTomorrow: KnockoutComputed<DayVM> = ko.computed({
            read: () => { return this.days[2]; },
            deferEvaluation: true
        });

        
    }

    
}
