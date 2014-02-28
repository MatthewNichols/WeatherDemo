/// <reference path="../../typings/qunit/qunit.d.ts" />
/// <reference path="../interfaces/idataservice.ts" />
/// <reference path="../interfaces/enums.ts" />
/// <reference path="../services/datamapper.ts" />
QUnit.module("DataMapperTests");

var services = Cachematrix.WeatherApp.Services;
var enums = Cachematrix.WeatherApp.Interfaces.Enums;

test("test", function () {
    var dataMapper = new services.DataMapper();

    var rawData = {
        currentConditions: { temp: 50, windSpeed: 5, windDirection: "NW" },
        days: [
            { dayIndex: 0, lowTemp: 50, highTemp: 50, windSpeed: 5, windDirection: "NW", humidity: 0.47, sunrise: 635, sunset: 1749, moonrise: 635, moonset: 1749, moonDesc: "Waning Crescent, 4% of the Moon is Illuminated" },
            { dayIndex: 1, lowTemp: 50, highTemp: 50, windSpeed: 5, windDirection: "NW", humidity: 0.47, sunrise: 635, sunset: 1749, moonrise: 635, moonset: 1749, moonDesc: "Waning Crescent, 4% of the Moon is Illuminated" },
            { dayIndex: 2, lowTemp: 50, highTemp: 50, windSpeed: 5, windDirection: "NW", humidity: 0.47, sunrise: 635, sunset: 1749, moonrise: 635, moonset: 1749, moonDesc: "Waning Crescent, 4% of the Moon is Illuminated" }
        ]
    };

    var weatherData = dataMapper.mapDataToWeatherData(rawData);

    equal(weatherData.currentConditions.temp, 50);
    equal(weatherData.currentConditions.windSpeed, 5);
    equal(weatherData.currentConditions.windDirection, 7 /* NW */);

    equal(weatherData.days.length, 3);

    console.log(weatherData.days[0]);

    equal(weatherData.days[0].dayIndex, 0);
    equal(weatherData.days[1].dayIndex, 1);
    equal(weatherData.days[2].dayIndex, 2);
});
