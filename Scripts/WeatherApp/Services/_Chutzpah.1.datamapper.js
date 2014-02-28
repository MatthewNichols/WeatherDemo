var Cachematrix;
(function (Cachematrix) {
    (function (WeatherApp) {
        (function (Services) {
            var enums = Cachematrix.WeatherApp.Interfaces.Enums;
            var interfaces = Cachematrix.WeatherApp.Interfaces;

            var DataMapper = (function () {
                function DataMapper() {
                }
                DataMapper.prototype.mapDataToWeatherData = function (data) {
                    var output = new WeatherData();

                    if (data.currentConditions) {
                        output.currentConditions.temp = data.currentConditions.temp;
                        output.currentConditions.windSpeed = data.currentConditions.windSpeed;
                        output.currentConditions.windDirection = enums.Direction[data.currentConditions.windDirection];
                    }

                    output.days = new Array();
                    if (data.days) {
                        for (var i = 0; i < data.days.length; i++) {
                            var day = data.days[i];
                            var dayData = new DayData();
                            dayData.dayIndex = day.dayIndex;

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
