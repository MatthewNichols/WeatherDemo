var Cachematrix;
(function (Cachematrix) {
    (function (WeatherApp) {
        (function (ViewModels) {
            var enums = Cachematrix.WeatherApp.Interfaces.Enums;

            var DetailsPageVM = (function () {
                function DetailsPageVM(day) {
                    var _this = this;
                    this.windFormatted = ko.computed({
                        read: function () {
                            return _this.windSpeed() + " MPH " + enums.Direction[_this.windDirection()];
                        },
                        deferEvaluation: true
                    });
                    this.windSpeed = ko.observable(day.windSpeed);
                    this.windDirection = ko.observable(day.windDirection);
                    this.humidity = ko.observable(day.humidity);
                    this.sunrise = ko.observable(day.sunrise);
                    this.sunset = ko.observable(day.sunset);
                    this.moonrise = ko.observable(day.moonrise);
                    this.moonset = ko.observable(day.moonset);
                    this.moonDesc = ko.observable(day.moonDesc);
                }
                return DetailsPageVM;
            })();
            ViewModels.DetailsPageVM = DetailsPageVM;
        })(WeatherApp.ViewModels || (WeatherApp.ViewModels = {}));
        var ViewModels = WeatherApp.ViewModels;
    })(Cachematrix.WeatherApp || (Cachematrix.WeatherApp = {}));
    var WeatherApp = Cachematrix.WeatherApp;
})(Cachematrix || (Cachematrix = {}));
//# sourceMappingURL=DetailsPageVM.js.map
