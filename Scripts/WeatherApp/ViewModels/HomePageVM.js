var Cachematrix;
(function (Cachematrix) {
    (function (WeatherApp) {
        (function (ViewModels) {
            var HomePageVM = (function () {
                function HomePageVM(data) {
                    var _this = this;
                    this.today = ko.computed({
                        read: function () {
                            return _this.days[0];
                        },
                        deferEvaluation: true
                    });
                    this.tomorrow = ko.computed({
                        read: function () {
                            return _this.days[1];
                        },
                        deferEvaluation: true
                    });
                    this.dayAfterTomorrow = ko.computed({
                        read: function () {
                            return _this.days[2];
                        },
                        deferEvaluation: true
                    });
                    this.currentConditions = new Cachematrix.WeatherApp.ViewModels.CurrentConditionsVM(data.currentConditions);

                    this.days = _.map(data.days, function (day) {
                        return new Cachematrix.WeatherApp.ViewModels.DayVM(day);
                    });
                }
                HomePageVM.prototype.init = function () {
                    //Nothing to do here
                };
                return HomePageVM;
            })();
            ViewModels.HomePageVM = HomePageVM;
        })(WeatherApp.ViewModels || (WeatherApp.ViewModels = {}));
        var ViewModels = WeatherApp.ViewModels;
    })(Cachematrix.WeatherApp || (Cachematrix.WeatherApp = {}));
    var WeatherApp = Cachematrix.WeatherApp;
})(Cachematrix || (Cachematrix = {}));
//# sourceMappingURL=HomePageVM.js.map
