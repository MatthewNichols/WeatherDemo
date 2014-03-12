//TypeScript only allows references to .ts files so use the chutzpah_reference tag to
// add a js reference that the test needs
/// <chutzpah_reference path="../../knockout-3.0.0.debug.js" />
/// <reference path="../../typings/qunit/qunit.d.ts" />
/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../interfaces/enums.ts" />
/// <reference path="../Models/DayData.ts" />
/// <reference path="../Models/CurrentConditions.ts" />
/// <reference path="../Models/WeatherData.ts" />
/// <reference path="../viewmodels/currentconditionsvm.ts" />
/// <reference path="../interfaces/ipagevm.ts" />
/// <reference path="../services/datamapper.ts" />
var Tests;
(function (Tests) {
    (function (CurrentConditions) {
        QUnit.module("CurrentConditionsTests");

        var vms = Cachematrix.WeatherApp.ViewModels;
        var enums = Cachematrix.WeatherApp.Interfaces.Enums;

        var models = Cachematrix.WeatherApp.Models;

        test("happy path test", function () {
            var data = new models.CurrentConditions();
            data.temp = 23;
            data.windSpeed = 12;
            data.windDirection = 1 /* NE */;

            var vm = new vms.CurrentConditionsVM(data);

            strictEqual(vm.temp(), data.temp);
            strictEqual(vm.windSpeed(), data.windSpeed);
            strictEqual(vm.windDirection(), data.windDirection);

            var expectedWindFormatted = "12 NE";
            strictEqual(vm.windFormatted(), expectedWindFormatted);
        });
    })(Tests.CurrentConditions || (Tests.CurrentConditions = {}));
    var CurrentConditions = Tests.CurrentConditions;
})(Tests || (Tests = {}));
//# sourceMappingURL=CurrentConditionsTests.js.map
