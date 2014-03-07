/// <reference path="../../typings/underscore/underscore.d.ts" />
/// <reference path="../../typings/knockout/knockout.d.ts" />
//TypeScript only allows references to .ts files so use the chutzpah_reference tag to
// add a js reference that the test needs
/// <chutzpah_reference path="../../knockout-3.0.0.debug.js" />
/// <reference path="../Services/DataService.ts" />
/// <chutzpah_reference path="../Interfaces/" />
/// <reference path="../Models/WeatherData.ts" />
/// <reference path="../Models/DayData.ts" />
/// <reference path="../Models/CurrentConditions.ts" />
/// <chutzpah_reference path="../ViewModels/" />
/// <reference path="../../typings/qunit/qunit.d.ts" />
/// <reference path="../services/datamapper.ts" />
var Tests;
(function (Tests) {
    (function (AppVM) {
        var vms = Cachematrix.WeatherApp.ViewModels;
        var enums = Cachematrix.WeatherApp.Interfaces.Enums;
        var services = Cachematrix.WeatherApp.Services;
        var models = Cachematrix.WeatherApp.Models;

        test("A", function () {
            var weatherData = new models.WeatherData();

            var currentConditions = new models.CurrentConditions();
            currentConditions.windDirection = 1 /* NE */;
            currentConditions.windSpeed = 10;
            currentConditions.basicCondition = 2 /* Rainy */;
            currentConditions.temp = 100;
            weatherData.currentConditions = currentConditions;

            weatherData.days = new Array();

            var dayData0 = new models.DayData();
            dayData0.lowTemp = 12;
            dayData0.highTemp = 120;
            weatherData.days.push(dayData0);

            var dayData1 = new models.DayData();
            dayData1.lowTemp = 32;
            dayData1.highTemp = 100;
            weatherData.days.push(dayData1);

            var dayData2 = new models.DayData();
            dayData2.lowTemp = 42;
            dayData2.highTemp = 90;
            weatherData.days.push(dayData2);

            var detailsScreenVisited = false;
            var mainScreenVisited = false;

            //TypeScript has classes, but it also lets object literals implement interfaces.  Very handy in Unit testing
            var pageTransitionsService = {
                moveToDetailsScreen: function () {
                    detailsScreenVisited = true;
                },
                moveToMainScreen: function () {
                    mainScreenVisited = true;
                }
            };

            var appVm = new vms.AppVM(new services.DataService(), new services.DataMapper(), pageTransitionsService);

            strictEqual(appVm.homePageVm.currentConditions.temp(), 100);
        });
    })(Tests.AppVM || (Tests.AppVM = {}));
    var AppVM = Tests.AppVM;
})(Tests || (Tests = {}));
//# sourceMappingURL=AppVMTests.js.map
