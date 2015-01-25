var Cachematrix;
(function (Cachematrix) {
    var WeatherApp;
    (function (WeatherApp) {
        var Models;
        (function (Models) {
            var WeatherData = (function () {
                function WeatherData() {
                    this.currentConditions = new Models.CurrentConditions();
                }
                return WeatherData;
            })();
            Models.WeatherData = WeatherData;
        })(Models = WeatherApp.Models || (WeatherApp.Models = {}));
    })(WeatherApp = Cachematrix.WeatherApp || (Cachematrix.WeatherApp = {}));
})(Cachematrix || (Cachematrix = {}));
//# sourceMappingURL=WeatherData.js.map