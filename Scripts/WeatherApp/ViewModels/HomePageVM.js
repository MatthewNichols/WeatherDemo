var Cachematrix;
(function (Cachematrix) {
    var WeatherApp;
    (function (WeatherApp) {
        var ViewModels;
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
                    this.currentConditions = new ViewModels.CurrentConditionsVM(data.currentConditions);
                    this.days = _.map(data.days, function (day) {
                        return new ViewModels.DayVM(day);
                    });
                }
                HomePageVM.prototype.init = function () {
                    //Nothing to do here
                };
                return HomePageVM;
            })();
            ViewModels.HomePageVM = HomePageVM;
        })(ViewModels = WeatherApp.ViewModels || (WeatherApp.ViewModels = {}));
    })(WeatherApp = Cachematrix.WeatherApp || (Cachematrix.WeatherApp = {}));
})(Cachematrix || (Cachematrix = {}));
//# sourceMappingURL=HomePageVM.js.map