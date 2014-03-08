/// <reference path="../../typings/qunit/qunit.d.ts" />
/// <reference path="../../typings/underscore/underscore.d.ts" />
/// <reference path="../../typings/knockout/knockout.d.ts" />
//TypeScript only allows references to .ts files so use the chutzpah_reference tag to
// add a js reference that the test needs
/// <chutzpah_reference path="../../knockout-3.0.0.debug.js" />
/// <chutzpah_reference path="../../underscore.js" />
var Tests;
(function (Tests) {
    /// <chutzpah_reference path="../Interfaces/" />
    /// <chutzpah_reference path="../Models/" />
    /// <chutzpah_reference path="../ViewModels/" />
    /// <chutzpah_reference path="../Services/" />
    (function (AppVM) {
        var vms = Cachematrix.WeatherApp.ViewModels;
        var enums = Cachematrix.WeatherApp.Interfaces.Enums;
        var models = Cachematrix.WeatherApp.Models;

        test("DataTests", function () {
            var weatherData = setupData();

            //Create a do nothing IDataService implementation.  Doesn't need to do anything because the IDataMapper will return the data
            var dataServices = {
                getData: function () {
                }
            };

            //Create a fake IDataMapper that returns the test data
            var dataMapper = {
                mapDataToWeatherData: function (data) {
                    return weatherData;
                }
            };

            //TypeScript has classes, but it also lets object literals implement interfaces.  Very handy in Unit testing
            var pageTransitionsService = {
                moveToDetailsScreen: function () {
                },
                moveToMainScreen: function () {
                }
            };

            var appVm = new vms.AppVM(dataServices, dataMapper, pageTransitionsService);

            strictEqual(appVm.homePageVm.currentConditions.temp(), 100);
            strictEqual(appVm.homePageVm.currentConditions.windDirection(), 1 /* NE */);
            strictEqual(appVm.homePageVm.currentConditions.windSpeed(), 10);
            strictEqual(appVm.homePageVm.currentConditions.basicCondition(), 2 /* Rainy */);
            //Obviously more assertions here would ber useful
        });

        test("PageTransitions", function () {
            var weatherData = setupData();

            //Set up a mock of IPageTransitionsService that records the calls to the navigation methods
            var moveToDetailsScreenCalled = false;
            var moveToMainScreenCalled = false;

            //TypeScript has classes, but it also lets object literals implement interfaces.  Very handy in Unit testing
            var pageTransitionsService = {
                moveToDetailsScreen: function () {
                    moveToDetailsScreenCalled = true;
                },
                moveToMainScreen: function () {
                    moveToMainScreenCalled = true;
                }
            };

            //Create a do nothing IDataService implementation.  Doesn't need to do anything because the IDataMapper will return the data
            var dataServices = {
                getData: function () {
                }
            };

            //Create a fake IDataMapper that returns the test data
            var dataMapper = {
                mapDataToWeatherData: function (data) {
                    return weatherData;
                }
            };

            //Set up the AppVM
            var appVm = new vms.AppVM(dataServices, dataMapper, pageTransitionsService);

            //Navigate and test
            appVm.dayClickHandler(new vms.DayVM(weatherData.days[1]));
            ok(moveToDetailsScreenCalled, "Detail Screen Visited");
            ok(!moveToMainScreenCalled, "moveToMainScreen not yet called");

            appVm.backClickHandler();
            ok(moveToMainScreenCalled, "moveToMainScreen Called");
        });

        //#region Test Data
        function setupData() {
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

            return weatherData;
        }
    })(Tests.AppVM || (Tests.AppVM = {}));
    var AppVM = Tests.AppVM;
})(Tests || (Tests = {}));
//# sourceMappingURL=AppVMTests.js.map
