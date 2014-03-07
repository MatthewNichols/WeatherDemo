module Cachematrix.WeatherApp.ViewModels {
     
    import interfaces = Cachematrix.WeatherApp.Interfaces;
    import services = Cachematrix.WeatherApp.Services;

    export class AppVM {
        constructor(private dataService: interfaces.IDataService, private dataMapper: services.DataMapper, public pageTransitionsService: interfaces.IPageTransitionsService)
        {
            var data = dataService.getData();
            var weatherData = dataMapper.mapDataToWeatherData(data);
            this.homePageVm = new HomePageVM(weatherData);
            this.detailsPageVm = ko.observable(new DetailsPageVM(weatherData.days[0]));
        }

        homePageVm: HomePageVM;            
        detailsPageVm: KnockoutObservable<DetailsPageVM>;

        public dayClickHandler: Function = day =>
        {
            console.log(day);
            this.detailsPageVm(new DetailsPageVM(day.rawData));
            this.pageTransitionsService.moveToDetailsScreen();
        }
        
        public backClickHandler: Function = () =>
        {
            console.log('back');
            this.pageTransitionsService.moveToMainScreen();
        }
    }

}