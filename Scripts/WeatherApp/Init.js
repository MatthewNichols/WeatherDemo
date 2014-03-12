﻿/// <reference path="../typings/jquery/jquery.d.ts" />
var Cachematrix;
(function (Cachematrix) {
    (function (WeatherApp) {
        var vms = Cachematrix.WeatherApp.ViewModels;
        var services = Cachematrix.WeatherApp.Services;

        function init() {
            var dataService = services.getDataService();
            var dataMapper = new services.DataMapper();
            var pageTransitionsService = new services.PageTransitionsService($, "#main-page", "#details-page");

            var appVm = new vms.AppVM(dataService, dataMapper, pageTransitionsService);

            ko.applyBindings(appVm);
        }
        WeatherApp.init = init;
    })(Cachematrix.WeatherApp || (Cachematrix.WeatherApp = {}));
    var WeatherApp = Cachematrix.WeatherApp;
})(Cachematrix || (Cachematrix = {}));
//# sourceMappingURL=Init.js.map
