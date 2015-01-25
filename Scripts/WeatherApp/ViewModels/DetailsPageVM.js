var Cachematrix;
(function (Cachematrix) {
    var WeatherApp;
    (function (WeatherApp) {
        var ViewModels;
        (function (ViewModels) {
            var enums = Cachematrix.WeatherApp.Interfaces.Enums;
            var DetailsPageVM = (function () {
                function DetailsPageVM() {
                    var _this = this;
                    this.windSpeed = ko.observable(null);
                    this.windDirection = ko.observable(null);
                    this.humidity = ko.observable(null);
                    this.sunrise = ko.observable(null);
                    this.sunset = ko.observable(null);
                    this.moonrise = ko.observable(null);
                    this.moonset = ko.observable(null);
                    this.moonDesc = ko.observable(null);
                    this.windFormatted = ko.computed({
                        read: function () { return _this.windSpeed() + " MPH " + enums.Direction[_this.windDirection()]; },
                        deferEvaluation: true
                    });
                    this.humidityFormatted = ko.computed({
                        read: function () { return _this.humidity() * 100 + "%"; },
                        deferEvaluation: true
                    });
                }
                DetailsPageVM.prototype.init = function (day) {
                    this.windSpeed(day.windSpeed);
                    this.windDirection(day.windDirection);
                    this.humidity(day.humidity);
                    this.sunrise(day.sunrise);
                    this.sunset(day.sunset);
                    this.moonrise(day.moonrise);
                    this.moonset(day.moonset);
                    this.moonDesc(day.moonDesc);
                };
                return DetailsPageVM;
            })();
            ViewModels.DetailsPageVM = DetailsPageVM;
        })(ViewModels = WeatherApp.ViewModels || (WeatherApp.ViewModels = {}));
    })(WeatherApp = Cachematrix.WeatherApp || (Cachematrix.WeatherApp = {}));
})(Cachematrix || (Cachematrix = {}));
//# sourceMappingURL=DetailsPageVM.js.map