/// <reference path="../../typings/qunit/qunit.d.ts" />
/// <reference path="../viewmodels/currentconditionsvm.ts" />
/// <reference path="../interfaces/enums.ts" />
/// <reference path="../interfaces/ipagevm.ts" />
/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../services/datamapper.ts" />


QUnit.module("CurrentConditionsTests");

import vms = Cachematrix.WeatherApp.ViewModels;
import services = Cachematrix.WeatherApp.Services;

test("happy path", ()=> {

    var data = new services.CurrentConditions();
    data.temp = 23;
    var vm = new vms.CurrentConditionsVM(data);


    strictEqual(vm.temp(), data.temp);
});