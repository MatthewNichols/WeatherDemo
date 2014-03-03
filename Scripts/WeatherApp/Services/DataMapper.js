var Cachematrix;
(function (Cachematrix) {
    (function (WeatherApp) {
        (function (Services) {
            var enums = Cachematrix.WeatherApp.Interfaces.Enums;

            var DataMapper = (function () {
                function DataMapper() {
                }
                DataMapper.prototype.mapDataToWeatherData = function (data) {
                    var output = new WeatherData();

                    if (data.currentConditions) {
                        output.currentConditions.temp = data.currentConditions.temp;
                        output.currentConditions.windSpeed = data.currentConditions.windSpeed;

                        //Because of the structure of TypeScript enums we need to make sure
                        // that the compiler knows that the incoming value is a string
                        output.currentConditions.windDirection = enums.Direction[data.currentConditions.windDirection];
                    }

                    output.days = new Array();
                    if (data.days) {
                        for (var i = 0; i < data.days.length; i++) {
                            var day = data.days[i];
                            var dayData = new DayData();

                            dayData.dayIndex = day.dayIndex;
                            dayData.lowTemp = day.lowTemp;
                            dayData.highTemp = day.highTemp;
                            dayData.windSpeed = day.windSpeed;

                            //Because of the structure of TypeScript enums we need to make sure
                            // that the compiler knows that the incoming value is a string
                            dayData.windDirection = enums.Direction[day.windDirection];
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

            var WeatherData = (function () {
                function WeatherData() {
                    this.currentConditions = new CurrentConditions();
                }
                return WeatherData;
            })();
            Services.WeatherData = WeatherData;

            var CurrentConditions = (function () {
                function CurrentConditions() {
                }
                return CurrentConditions;
            })();
            Services.CurrentConditions = CurrentConditions;

            var DayData = (function () {
                function DayData() {
                }
                return DayData;
            })();
            Services.DayData = DayData;
        })(WeatherApp.Services || (WeatherApp.Services = {}));
        var Services = WeatherApp.Services;
    })(Cachematrix.WeatherApp || (Cachematrix.WeatherApp = {}));
    var WeatherApp = Cachematrix.WeatherApp;
})(Cachematrix || (Cachematrix = {}));
//# sourceMappingURL=DataMapper.js.map
