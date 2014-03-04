var Cachematrix;
(function (Cachematrix) {
    (function (WeatherApp) {
        (function (Services) {
            var webserviceUrl = "http://somedefaultURL";

            function getDataService(webserviceUrl) {
                //If a webserviceUrl is specified then override the default.
                if (webserviceUrl != null) {
                    this.webserviceUrl = webserviceUrl;
                }

                return new DataService();
            }
            Services.getDataService = getDataService;

            var DataService = (function () {
                function DataService() {
                }
                DataService.prototype.getData = function () {
                    return {
                        currentConditions: { temp: 52, windSpeed: 5, windDirection: "NW", basicCondition: "Cloudy" },
                        days: [
                            { dayIndex: 0, lowTemp: 51, highTemp: 52, windSpeed: 5, windDirection: "NW", basicCondition: "Cloudy", humidity: 0.47, sunrise: 635, sunset: 1749, moonrise: 635, moonset: 1749, moonDesc: "Waning Crescent, 4% of the Moon is Illuminated" },
                            { dayIndex: 1, lowTemp: 53, highTemp: 54, windSpeed: 5, windDirection: "NW", basicCondition: "Sunny", humidity: 0.47, sunrise: 635, sunset: 1749, moonrise: 635, moonset: 1749, moonDesc: "Waning Crescent, 4% of the Moon is Illuminated" },
                            { dayIndex: 2, lowTemp: 55, highTemp: 56, windSpeed: 5, windDirection: "NW", basicCondition: "Rainy", humidity: 0.47, sunrise: 635, sunset: 1749, moonrise: 635, moonset: 1749, moonDesc: "Waning Crescent, 4% of the Moon is Illuminated" }
                        ]
                    };
                };
                return DataService;
            })();
            Services.DataService = DataService;
        })(WeatherApp.Services || (WeatherApp.Services = {}));
        var Services = WeatherApp.Services;
    })(Cachematrix.WeatherApp || (Cachematrix.WeatherApp = {}));
    var WeatherApp = Cachematrix.WeatherApp;
})(Cachematrix || (Cachematrix = {}));
//# sourceMappingURL=DataService.js.map
