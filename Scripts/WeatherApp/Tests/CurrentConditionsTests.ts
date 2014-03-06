//TypeScript only allows references to .ts files so use the chutzpah_reference tag to 
// add a js reference that the test needs
/// <chutzpah_reference path="../../knockout-3.0.0.debug.js" />
/// <reference path="../../typings/qunit/qunit.d.ts" />
/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../interfaces/enums.ts" />
/// <reference path="../viewmodels/currentconditionsvm.ts" />
/// <reference path="../interfaces/ipagevm.ts" />

/// <reference path="../services/datamapper.ts" />

module Tests.CurrentConditions {

    QUnit.module("CurrentConditionsTests");

    import vms = Cachematrix.WeatherApp.ViewModels;
    import services = Cachematrix.WeatherApp.Services;

    test("happy path", ()=> {

        var data = new services.CurrentConditions();
        data.temp = 23;
        var vm = new vms.CurrentConditionsVM(data);


        strictEqual(vm.temp(), data.temp);
    });
}