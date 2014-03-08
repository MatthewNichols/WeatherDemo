/// <reference path="../../typings/qunit/qunit.d.ts" />
/// <reference path="../../typings/underscore/underscore.d.ts" />
/// <reference path="../../typings/knockout/knockout.d.ts" />
//TypeScript only allows references to .ts files so use the chutzpah_reference tag to 
// add a js reference that the test needs
/// <chutzpah_reference path="../../knockout-3.0.0.debug.js" />
/// <chutzpah_reference path="../../underscore.js" />

/// <chutzpah_reference path="../Interfaces/" />
/// <chutzpah_reference path="../Models/" />
/// <chutzpah_reference path="../ViewModels/" />
/// <chutzpah_reference path="../Services/" />

module Tests.AppVM
{
    import vms = Cachematrix.WeatherApp.ViewModels;
    import enums = Cachematrix.WeatherApp.Interfaces.Enums;
    import models = Cachematrix.WeatherApp.Models;
    import interfaces = Cachematrix.WeatherApp.Interfaces;

    test("DataTests", ()=> {

        var weatherData = setupData();
        
        //Create a do nothing IDataService implementation.  Doesn't need to do anything because the IDataMapper will return the data
        var dataServices: interfaces.IDataService = {
            getData: () => { }
        };

        //Create a fake IDataMapper that returns the test data
        var dataMapper: interfaces.IDataMapper = {
            mapDataToWeatherData: (data) => weatherData
        };
        
        //TypeScript has classes, but it also lets object literals implement interfaces.  Very handy in Unit testing 
        var pageTransitionsService: interfaces.IPageTransitionsService = {
            moveToDetailsScreen: ()=> {},
            moveToMainScreen: ()=> {}
        };

        var appVm = new vms.AppVM(dataServices, dataMapper, pageTransitionsService);

        strictEqual(appVm.homePageVm.currentConditions.temp(), 100);
        strictEqual(appVm.homePageVm.currentConditions.windDirection(), enums.Direction.NE);
        strictEqual(appVm.homePageVm.currentConditions.windSpeed(), 10);
        strictEqual(appVm.homePageVm.currentConditions.basicCondition(), enums.BasicCondition.Rainy);

        //Obviously more assertions here would ber useful
    });

    test("PageTransitions", () =>
    {

        var weatherData = setupData();
        
        //Set up a mock of IPageTransitionsService that records the calls to the navigation methods
        var moveToDetailsScreenCalled: boolean = false;
        var moveToMainScreenCalled: boolean = false;
        //TypeScript has classes, but it also lets object literals implement interfaces.  Very handy in Unit testing 
        var pageTransitionsService: interfaces.IPageTransitionsService = {
            moveToDetailsScreen: () => { moveToDetailsScreenCalled = true; },
            moveToMainScreen: () => { moveToMainScreenCalled = true; }
        };

        //Create a do nothing IDataService implementation.  Doesn't need to do anything because the IDataMapper will return the data
        var dataServices: interfaces.IDataService = {
            getData: ()=>  {}
        };

        //Create a fake IDataMapper that returns the test data
        var dataMapper: interfaces.IDataMapper = {
            mapDataToWeatherData: (data) => weatherData
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

    function setupData()
    {
        var weatherData = new models.WeatherData();

        var currentConditions = new models.CurrentConditions();
        currentConditions.windDirection = enums.Direction.NE;
        currentConditions.windSpeed = 10;
        currentConditions.basicCondition = enums.BasicCondition.Rainy;
        currentConditions.temp = 100;
        weatherData.currentConditions = currentConditions;

        weatherData.days = new Array<models.DayData>();

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

    //#endregion
} 