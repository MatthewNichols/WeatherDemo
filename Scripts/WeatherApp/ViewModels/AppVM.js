var Cachematrix;
(function (Cachematrix) {
    var WeatherApp;
    (function (WeatherApp) {
        var ViewModels;
        (function (ViewModels) {
            var AppVM = (function () {
                function AppVM(dataService, dataMapper, pageTransitionsService) {
                    var _this = this;
                    this.dataService = dataService;
                    this.dataMapper = dataMapper;
                    this.pageTransitionsService = pageTransitionsService;
                    /**
                     * Handles the clicks on the day regions and transitions to the details screen
                     * @param {DayVM} day - A DayVM for the day to transition to the Details screen
                     */
                    this.dayClickHandler = function (day) {
                        _this.detailsPageVm.init(day.rawData);
                        _this.pageTransitionsService.moveToDetailsScreen();
                    };
                    /**
                     * Handles the clicks on Details back button
                     */
                    this.backClickHandler = function () {
                        _this.pageTransitionsService.moveToMainScreen();
                    };
                    var data = dataService.getData();
                    var weatherData = dataMapper.mapDataToWeatherData(data);
                    this.homePageVm = new ViewModels.HomePageVM(weatherData);
                    this.detailsPageVm = new ViewModels.DetailsPageVM();
                }
                return AppVM;
            })();
            ViewModels.AppVM = AppVM;
        })(ViewModels = WeatherApp.ViewModels || (WeatherApp.ViewModels = {}));
    })(WeatherApp = Cachematrix.WeatherApp || (Cachematrix.WeatherApp = {}));
})(Cachematrix || (Cachematrix = {}));
//# sourceMappingURL=AppVM.js.map