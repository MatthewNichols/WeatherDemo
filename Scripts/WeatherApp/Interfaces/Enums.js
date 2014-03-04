var Cachematrix;
(function (Cachematrix) {
    (function (WeatherApp) {
        (function (Interfaces) {
            (function (Enums) {
                (function (BasicCondition) {
                    BasicCondition[BasicCondition["Sunny"] = 0] = "Sunny";
                    BasicCondition[BasicCondition["Cloudy"] = 1] = "Cloudy";
                    BasicCondition[BasicCondition["Rainy"] = 2] = "Rainy";
                })(Enums.BasicCondition || (Enums.BasicCondition = {}));
                var BasicCondition = Enums.BasicCondition;

                //Examples
                //console.log(BasicCondition.Cloudy); //Yields 1
                //console.log(BasicCondition[BasicCondition.Cloudy]); //Yields "Cloudy"
                //console.log(BasicCondition["Cloudy"]); //Yields 1
                (function (DayIndex) {
                    DayIndex[DayIndex["Today"] = 0] = "Today";
                    DayIndex[DayIndex["Tomorrow"] = 1] = "Tomorrow";
                    DayIndex[DayIndex["DayAfterTomorrow"] = 2] = "DayAfterTomorrow";
                })(Enums.DayIndex || (Enums.DayIndex = {}));
                var DayIndex = Enums.DayIndex;

                (function (Direction) {
                    Direction[Direction["N"] = 0] = "N";
                    Direction[Direction["NE"] = 1] = "NE";
                    Direction[Direction["E"] = 2] = "E";
                    Direction[Direction["SE"] = 3] = "SE";
                    Direction[Direction["S"] = 4] = "S";
                    Direction[Direction["SW"] = 5] = "SW";
                    Direction[Direction["W"] = 6] = "W";
                    Direction[Direction["NW"] = 7] = "NW";
                })(Enums.Direction || (Enums.Direction = {}));
                var Direction = Enums.Direction;
            })(Interfaces.Enums || (Interfaces.Enums = {}));
            var Enums = Interfaces.Enums;
        })(WeatherApp.Interfaces || (WeatherApp.Interfaces = {}));
        var Interfaces = WeatherApp.Interfaces;
    })(Cachematrix.WeatherApp || (Cachematrix.WeatherApp = {}));
    var WeatherApp = Cachematrix.WeatherApp;
})(Cachematrix || (Cachematrix = {}));
//# sourceMappingURL=Enums.js.map
