var Cachematrix;
(function (Cachematrix) {
    var WeatherApp;
    (function (WeatherApp) {
        var Services;
        (function (Services) {
            var enums = Cachematrix.WeatherApp.Interfaces.Enums;
            var models = Cachematrix.WeatherApp.Models;
            var DataMapper = (function () {
                function DataMapper() {
                }
                DataMapper.prototype.mapDataToWeatherData = function (data) {
                    var output = new models.WeatherData();
                    if (data.currentConditions) {
                        output.currentConditions.temp = data.currentConditions.temp;
                        output.currentConditions.windSpeed = data.currentConditions.windSpeed;
                        //Because of the structure of TypeScript enums we need to make sure 
                        // that the compiler knows that the incoming value is a string
                        output.currentConditions.windDirection = enums.Direction[data.currentConditions.windDirection];
                        output.currentConditions.basicCondition = enums.BasicCondition[data.currentConditions.basicCondition];
                    }
                    output.days = new Array();
                    if (data.days) {
                        for (var i = 0; i < data.days.length; i++) {
                            var day = data.days[i];
                            var dayData = new models.DayData();
                            dayData.dayIndex = day.dayIndex;
                            dayData.lowTemp = day.lowTemp;
                            dayData.highTemp = day.highTemp;
                            dayData.windSpeed = day.windSpeed;
                            //Because of the structure of TypeScript enums we need to make sure 
                            // that the compiler knows that the incoming value is a string
                            dayData.windDirection = enums.Direction[day.windDirection];
                            dayData.basicCondition = enums.BasicCondition[day.basicCondition];
                            dayData.humidity = day.humidity;
                            dayData.sunrise = day.sunrise;
                            dayData.sunset = day.sunset;
                            dayData.moonrise = day.moonrise;
                            dayData.moonset = day.moonset;
                            dayData.moonDesc = day.moonDesc;
                            output.days[output.days.length] = dayData;
                        }
                    }
                    return output;
                };
                return DataMapper;
            })();
            Services.DataMapper = DataMapper;
        })(Services = WeatherApp.Services || (WeatherApp.Services = {}));
    })(WeatherApp = Cachematrix.WeatherApp || (Cachematrix.WeatherApp = {}));
})(Cachematrix || (Cachematrix = {}));
//# sourceMappingURL=DataMapper.js.map