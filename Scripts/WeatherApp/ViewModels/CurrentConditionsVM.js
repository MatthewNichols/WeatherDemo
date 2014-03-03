var Cachematrix;
(function (Cachematrix) {
    (function (WeatherApp) {
        (function (ViewModels) {
            var enums = Cachematrix.WeatherApp.Interfaces.Enums;

            var CurrentConditionsVM = (function () {
                function CurrentConditionsVM(data) {
                    var _this = this;
                    this.temp = ko.observable(data.temp);
                    this.windSpeed = ko.observable(data.windSpeed);
                    this.windDirection = ko.observable(data.windDirection);

                    this.tempFormatted = ko.computed(function () {
                        //TODO: add switching between F and C scales
                        return _this.temp() + "° F";
                    });
                    this.windFormatted = ko.computed(function () {
                        return _this.windSpeed() + " " + enums.Direction[_this.windDirection()];
                    });
                }
                return CurrentConditionsVM;
            })();
            ViewModels.CurrentConditionsVM = CurrentConditionsVM;
        })(WeatherApp.ViewModels || (WeatherApp.ViewModels = {}));
        var ViewModels = WeatherApp.ViewModels;
    })(Cachematrix.WeatherApp || (Cachematrix.WeatherApp = {}));
    var WeatherApp = Cachematrix.WeatherApp;
})(Cachematrix || (Cachematrix = {}));
//# sourceMappingURL=CurrentConditionsVM.js.map
