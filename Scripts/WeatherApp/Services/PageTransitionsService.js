/// <reference path="../../typings/jquery/jquery.d.ts" />
var Cachematrix;
(function (Cachematrix) {
    var WeatherApp;
    (function (WeatherApp) {
        var Services;
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
                    this.mainScreen.removeClass(currentPageClassName);
                    this.detailsScreen.addClass(currentPageClassName);
                };
                PageTransitionsService.prototype.moveToMainScreen = function () {
                    this.detailsScreen.removeClass(currentPageClassName);
                    this.mainScreen.addClass(currentPageClassName);
                };
                return PageTransitionsService;
            })();
            Services.PageTransitionsService = PageTransitionsService;
        })(Services = WeatherApp.Services || (WeatherApp.Services = {}));
    })(WeatherApp = Cachematrix.WeatherApp || (Cachematrix.WeatherApp = {}));
})(Cachematrix || (Cachematrix = {}));
//# sourceMappingURL=PageTransitionsService.js.map