/// <reference path="../../typings/qunit/qunit.d.ts" />
/// <reference path="../interfaces/idataservice.ts" />
/// <reference path="../interfaces/enums.ts" />
/// <reference path="../services/datamapper.ts" />
var Tests;
(function (Tests) {
    //Pretty important to put modules around Unit tests because otherwise the imports from different tests run into each other.
    (function (DataMapper) {
        QUnit.module("DataMapperTests");

        var services = Cachematrix.WeatherApp.Services;
        var enums = Cachematrix.WeatherApp.Interfaces.Enums;

        test("test mapping", function () {
            var dataMapper = new services.DataMapper();

            var rawData = {
                currentConditions: { temp: 50, windSpeed: 5, windDirection: "NW" },
                days: [
                    { dayIndex: 0, lowTemp: 50, highTemp: 60, windSpeed: 5, windDirection: "N", humidity: 0.47, sunrise: 635, sunset: 1749, moonrise: 635, moonset: 1749, moonDesc: "Waning Crescent, 4% of the Moon is Illuminated" },
                    { dayIndex: 1, lowTemp: 51, highTemp: 61, windSpeed: 5, windDirection: "W", humidity: 0.48, sunrise: 634, sunset: 1751, moonrise: 635, moonset: 1749, moonDesc: "Waning Crescent, 4% of the Moon is Illuminated" },
                    { dayIndex: 2, lowTemp: 52, highTemp: 62, windSpeed: 5, windDirection: "S", humidity: 0.49, sunrise: 633, sunset: 1751, moonrise: 635, moonset: 1749, moonDesc: "Waning Crescent, 4% of the Moon is Illuminated" }
                ]
            };

            var weatherData = dataMapper.mapDataToWeatherData(rawData);

            equal(weatherData.currentConditions.temp, 50);
            equal(weatherData.currentConditions.windSpeed, 5);
            equal(weatherData.currentConditions.windDirection, 7 /* NW */);

            equal(weatherData.days.length, 3);

            equal(weatherData.days[0].dayIndex, 0 /* Today */);
            equal(weatherData.days[0].lowTemp, 50);
            equal(weatherData.days[0].highTemp, 60);
            equal(weatherData.days[0].windSpeed, 5);
            equal(weatherData.days[0].windDirection, 0 /* N */);
            equal(weatherData.days[0].humidity, 0.47);
            equal(weatherData.days[0].sunrise, 635);
            equal(weatherData.days[0].sunset, 1749);
            equal(weatherData.days[0].moonrise, 635);
            equal(weatherData.days[0].moonset, 1749);

            equal(weatherData.days[1].dayIndex, 1 /* Tomorrow */);
            equal(weatherData.days[2].dayIndex, 2 /* DayAfterTomorrow */);
        });
    })(Tests.DataMapper || (Tests.DataMapper = {}));
    var DataMapper = Tests.DataMapper;
})(Tests || (Tests = {}));
//# sourceMappingURL=DataMapperTests.js.map
