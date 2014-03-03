var Cachematrix;
(function (Cachematrix) {
    (function (WeatherApp) {
        var vms = Cachematrix.WeatherApp.ViewModels;
        var services = Cachematrix.WeatherApp.Services;

        function init() {
            var dataService = services.getDataService();
            var dataMapper = new services.DataMapper();
            var appVm = new vms.AppVM(dataService, dataMapper);

            console.log(appVm);

            ko.applyBindings(appVm);
        }
        WeatherApp.init = init;
    })(Cachematrix.WeatherApp || (Cachematrix.WeatherApp = {}));
    var WeatherApp = Cachematrix.WeatherApp;
})(Cachematrix || (Cachematrix = {}));
//# sourceMappingURL=Init.js.map
