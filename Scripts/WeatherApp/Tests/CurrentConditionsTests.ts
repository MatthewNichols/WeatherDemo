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

module Tests.CurrentConditions {

    QUnit.module("CurrentConditionsTests");

    import vms = Cachematrix.WeatherApp.ViewModels;
    import enums = Cachematrix.WeatherApp.Interfaces.Enums;
    import services = Cachematrix.WeatherApp.Services;
    import models = Cachematrix.WeatherApp.Models;

    test("happy path test", ()=> {

        var data = new models.CurrentConditions();
        data.temp = 23;
        data.windSpeed = 12;
        data.windDirection = enums.Direction.NE;

        var vm = new vms.CurrentConditionsVM(data);
        
        strictEqual(vm.temp(), data.temp);
        strictEqual(vm.windSpeed(), data.windSpeed);
        strictEqual(vm.windDirection(), data.windDirection);

        var expectedWindFormatted = "12 NE";
        strictEqual(vm.windFormatted(), expectedWindFormatted);
        
    });
}