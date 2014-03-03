module Cachematrix.WeatherApp.ViewModels {
     
    import interfaces = Cachematrix.WeatherApp.Interfaces;
    import services = Cachematrix.WeatherApp.Services;

    export class AppVM {
        constructor(private dataService: interfaces.IDataService, private dataMapper: services.DataMapper) {
            var data = dataService.getData();
            var weatherData = dataMapper.mapDataToWeatherData(data);
            this.homePageVm = new HomePageVM(weatherData);
        }

        homePageVm: HomePageVM;            
        detailsPageVm: DetailsPageVM;

        
    }

}