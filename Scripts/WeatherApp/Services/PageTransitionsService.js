/// <reference path="../../typings/jquery/jquery.d.ts" />
var Cachematrix;
(function (Cachematrix) {
    (function (WeatherApp) {
        (function (Services) {
            var currentPageClassName = "current-page";

            var PageTransitionsService = (function () {
                function PageTransitionsService($, mainScreenSelector, detailsScreenSelector) {
                    this.mainScreenSelector = mainScreenSelector;
                    this.detailsScreenSelector = detailsScreenSelector;
                    this.mainScreen = $(mainScreenSelector);
                    this.detailsScreen = $(detailsScreenSelector);
                }
                PageTransitionsService.prototype.moveToDetailsScreen = function () {
                    console.log("moveToDetailsScreen");

                    this.mainScreen.removeClass(currentPageClassName);
                    this.detailsScreen.addClass(currentPageClassName);
                };

                PageTransitionsService.prototype.moveToMainScreen = function () {
                    console.log("moveToMainScreen");

                    this.detailsScreen.removeClass(currentPageClassName);
                    this.mainScreen.addClass(currentPageClassName);
                };
                return PageTransitionsService;
            })();
            Services.PageTransitionsService = PageTransitionsService;
        })(WeatherApp.Services || (WeatherApp.Services = {}));
        var Services = WeatherApp.Services;
    })(Cachematrix.WeatherApp || (Cachematrix.WeatherApp = {}));
    var WeatherApp = Cachematrix.WeatherApp;
})(Cachematrix || (Cachematrix = {}));
//# sourceMappingURL=PageTransitionsService.js.map
