module Cachematrix.WeatherApp.ViewModels {
     
    import interfaces = Cachematrix.WeatherApp.Interfaces;
    import services = Cachematrix.WeatherApp.Services;

    export class AppVM {
        constructor(private dataService: interfaces.IDataService, private dataMapper: interfaces.IDataMapper, public pageTransitionsService: interfaces.IPageTransitionsService)
        {
            var data = dataService.getData();
            var weatherData = dataMapper.mapDataToWeatherData(data);
            this.homePageVm = new HomePageVM(weatherData);
            this.detailsPageVm = new DetailsPageVM();
        }

        homePageVm: HomePageVM;            
        detailsPageVm: DetailsPageVM;

        /**
         * Handles the clicks on the day regions and transitions to the details screen
         * @param {DayVM} day - A DayVM for the day to transition to the Details screen
         */
        public dayClickHandler: Function = (day: DayVM) =>
        {
            this.detailsPageVm.init(day.rawData);
            this.pageTransitionsService.moveToDetailsScreen();
        }
        
        /**
         * Handles the clicks on Details back button
         */
        public backClickHandler: Function = () =>
        {
            this.pageTransitionsService.moveToMainScreen();
        }
    }

}