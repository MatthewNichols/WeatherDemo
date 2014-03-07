var Cachematrix;
(function (Cachematrix) {
    (function (WeatherApp) {
        (function (ViewModels) {
            var AppVM = (function () {
                function AppVM(dataService, dataMapper, pageTransitionsService) {
                    var _this = this;
                    this.dataService = dataService;
                    this.dataMapper = dataMapper;
                    this.pageTransitionsService = pageTransitionsService;
                    this.dayClickHandler = function (day) {
                        console.log(day);
                        _this.detailsPageVm(new Cachematrix.WeatherApp.ViewModels.DetailsPageVM(day.rawData));
                        _this.pageTransitionsService.moveToDetailsScreen();
                    };
                    this.backClickHandler = function () {
                        console.log('back');
                        _this.pageTransitionsService.moveToMainScreen();
                    };
                    var data = dataService.getData();
                    var weatherData = dataMapper.mapDataToWeatherData(data);
                    this.homePageVm = new Cachematrix.WeatherApp.ViewModels.HomePageVM(weatherData);
                    this.detailsPageVm = ko.observable(new Cachematrix.WeatherApp.ViewModels.DetailsPageVM(weatherData.days[0]));
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
