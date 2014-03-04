var Cachematrix;
(function (Cachematrix) {
    (function (WeatherApp) {
        (function (ViewModels) {
            var enums = Cachematrix.WeatherApp.Interfaces.Enums;

            var CurrentConditionsVM = (function () {
                function CurrentConditionsVM(data) {
                    var _this = this;
                    this.tempFormatted = ko.computed({
                        read: function () {
                            //TODO: add switching between F and C scales
                            return _this.temp() + "° F";
                        },
                        deferEvaluation: true
                    });
                    this.windFormatted = ko.computed({
                        read: function () {
                            return _this.windSpeed() + " " + enums.Direction[_this.windDirection()];
                        },
                        deferEvaluation: true
                    });
                    this.imageIconSrc = ko.computed({
                        read: function () {
                            return "/Content/images/" + enums.BasicCondition[_this.basicCondition()] + ".png";
                        },
                        deferEvaluation: true
                    });
                    this.basicConditionName = ko.computed({
                        read: function () {
                            return enums.BasicCondition[_this.basicCondition()];
                        },
                        deferEvaluation: true
                    });
                    this.temp = ko.observable(data.temp);
                    this.windSpeed = ko.observable(data.windSpeed);
                    this.windDirection = ko.observable(data.windDirection);
                    this.basicCondition = ko.observable(data.basicCondition);
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
