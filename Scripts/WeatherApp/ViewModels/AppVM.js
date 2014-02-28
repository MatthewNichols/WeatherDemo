var Cachematrix;
(function (Cachematrix) {
    (function (WeatherApp) {
        (function (ViewModels) {
            var AppVM = (function () {
                function AppVM(dataService) {
                    this.dataService = dataService;
                    var data = dataService.getData();
                    this.parseData(data);
                }
                AppVM.prototype.parseData = function (rawData) {
                };
                return AppVM;
            })();
            ViewModels.AppVM = AppVM;
        })(WeatherApp.ViewModels || (WeatherApp.ViewModels = {}));
        var ViewModels = WeatherApp.ViewModels;
    })(Cachematrix.WeatherApp || (Cachematrix.WeatherApp = {}));
    var WeatherApp = Cachematrix.WeatherApp;
})(Cachematrix || (Cachematrix = {}));
//# sourceMappingURL=AppVM.js.map
