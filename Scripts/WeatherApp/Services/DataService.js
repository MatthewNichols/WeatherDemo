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
                            { dayIndex: 0, lowTemp: 51, highTemp: 52, windSpeed: 5, windDirection: "NW", basicCondition: "Cloudy", humidity: 0.47, sunrise: "6:35 AM", sunset: "5:49 PM", moonrise: "6:35 AM", moonset: "5: 49 PM", moonDesc: "Waning Crescent, 4% of the Moon is Illuminated" },
                            { dayIndex: 1, lowTemp: 53, highTemp: 54, windSpeed: 8, windDirection: "NW", basicCondition: "Sunny", humidity: 0.47, sunrise: "6:33 AM", sunset: "5:51 PM", moonrise: "7:35 AM", moonset: "6: 49 PM", moonDesc: "Waning Crescent, 12% of the Moon is Illuminated" },
                            { dayIndex: 2, lowTemp: 55, highTemp: 56, windSpeed: 12, windDirection: "NW", basicCondition: "Rainy", humidity: 0.47, sunrise: "6:31 AM", sunset: "5:53 PM", moonrise: "8:35 AM", moonset: "6: 49 PM", moonDesc: "Waning Crescent, 20% of the Moon is Illuminated" }
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
