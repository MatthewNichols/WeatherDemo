var Cachematrix;
(function (Cachematrix) {
    (function (WeatherApp) {
        (function (ViewModels) {
            var AppVM = (function () {
                function AppVM(dataService, dataMapper) {
                    this.dataService = dataService;
                    this.dataMapper = dataMapper;
                    var data = dataService.getData();
                    var weatherData = dataMapper.mapDataToWeatherData(data);
                    this.homePageVm = new Cachematrix.WeatherApp.ViewModels.HomePageVM(weatherData);
                }
                return AppVM;
            })();
            ViewModels.AppVM = AppVM;
        })(WeatherApp.ViewModels || (WeatherApp.ViewModels = {}));
        var ViewModels = WeatherApp.ViewModels;
    })(Cachematrix.WeatherApp || (Cachematrix.WeatherApp = {}));
    var WeatherApp = Cachematrix.WeatherApp;
})(Cachematrix || (Cachematrix = {}));
//# sourceMappingURL=AppVM.js.map
