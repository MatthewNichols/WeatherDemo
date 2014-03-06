//TypeScript only allows references to .ts files so use the chutzpah_reference tag to
// add a js reference that the test needs
/// <chutzpah_reference path="../../knockout-3.0.0.debug.js" />
/// <reference path="../../typings/qunit/qunit.d.ts" />
/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../interfaces/enums.ts" />
/// <reference path="../viewmodels/currentconditionsvm.ts" />
/// <reference path="../interfaces/ipagevm.ts" />
var Tests;
(function (Tests) {
    /// <reference path="../services/datamapper.ts" />
    (function (CurrentConditions) {
        QUnit.module("CurrentConditionsTests");

        var vms = Cachematrix.WeatherApp.ViewModels;

        var models = Cachematrix.WeatherApp.Models;

        test("happy path", function () {
            var data = new models.CurrentConditions();
            data.temp = 23;
            var vm = new vms.CurrentConditionsVM(data);

            strictEqual(vm.temp(), data.temp);
        });
    })(Tests.CurrentConditions || (Tests.CurrentConditions = {}));
    var CurrentConditions = Tests.CurrentConditions;
})(Tests || (Tests = {}));
//# sourceMappingURL=CurrentConditionsTests.js.map
