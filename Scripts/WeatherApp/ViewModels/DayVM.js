var Cachematrix;
(function (Cachematrix) {
    var WeatherApp;
    (function (WeatherApp) {
        var ViewModels;
        (function (ViewModels) {
            var enums = Cachematrix.WeatherApp.Interfaces.Enums;
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
                    this.imageIconSrc = ko.computed({
                        read: function () { return "/Content/images/" + enums.BasicCondition[_this.basicCondition()] + ".png"; },
                        deferEvaluation: true
                    });
                    this.basicConditionName = ko.computed({
                        read: function () { return enums.BasicCondition[_this.basicCondition()]; },
                        deferEvaluation: true
                    });
                    this.dayIndex = ko.observable(day.dayIndex);
                    this.lowTemp = ko.observable(day.lowTemp);
                    this.highTemp = ko.observable(day.highTemp);
                    this.basicCondition = ko.observable(day.basicCondition);
                    this.rawData = day;
                }
                return DayVM;
            })();
            ViewModels.DayVM = DayVM;
        })(ViewModels = WeatherApp.ViewModels || (WeatherApp.ViewModels = {}));
    })(WeatherApp = Cachematrix.WeatherApp || (Cachematrix.WeatherApp = {}));
})(Cachematrix || (Cachematrix = {}));
//# sourceMappingURL=DayVM.js.map