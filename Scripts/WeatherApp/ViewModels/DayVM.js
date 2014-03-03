var Cachematrix;
(function (Cachematrix) {
    (function (WeatherApp) {
        (function (ViewModels) {
            var DayVM = (function () {
                function DayVM(day) {
                    var _this = this;
                    this.highTempFormatted = ko.computed({
                        read: function () {
                            return _this.highTemp() + "° F";
                        },
                        deferEvaluation: true
                    });
                    this.lowTempFormatted = ko.computed({
                        read: function () {
                            return _this.lowTemp() + "° F";
                        },
                        deferEvaluation: true
                    });
                    this.dayIndex = ko.observable(day.dayIndex);
                    this.lowTemp = ko.observable(day.lowTemp);
                    this.highTemp = ko.observable(day.highTemp);
                    this.windSpeed = ko.observable(day.windSpeed);
                    this.windDirection = ko.observable(day.windDirection);
                    this.humidity = ko.observable(day.humidity);
                    this.sunrise = ko.observable(day.sunrise);
                    this.sunset = ko.observable(day.sunset);
                    this.moonrise = ko.observable(day.moonrise);
                    this.moonset = ko.observable(day.moonset);
                    this.moonDesc = ko.observable(day.moonDesc);
                }
                return DayVM;
            })();
            ViewModels.DayVM = DayVM;
        })(WeatherApp.ViewModels || (WeatherApp.ViewModels = {}));
        var ViewModels = WeatherApp.ViewModels;
    })(Cachematrix.WeatherApp || (Cachematrix.WeatherApp = {}));
    var WeatherApp = Cachematrix.WeatherApp;
})(Cachematrix || (Cachematrix = {}));
//# sourceMappingURL=DayVM.js.map
