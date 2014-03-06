var Cachematrix;
(function (Cachematrix) {
    (function (WeatherApp) {
        (function (Models) {
            var WeatherData = (function () {
                function WeatherData() {
                    this.currentConditions = new Cachematrix.WeatherApp.Models.CurrentConditions();
                }
                return WeatherData;
            })();
            Models.WeatherData = WeatherData;
        })(WeatherApp.Models || (WeatherApp.Models = {}));
        var Models = WeatherApp.Models;
    })(Cachematrix.WeatherApp || (Cachematrix.WeatherApp = {}));
    var WeatherApp = Cachematrix.WeatherApp;
})(Cachematrix || (Cachematrix = {}));
//# sourceMappingURL=WeatherData.js.map
