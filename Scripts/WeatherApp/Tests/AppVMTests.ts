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

module Tests.AppVM
{

    import vms = Cachematrix.WeatherApp.ViewModels;
    import enums = Cachematrix.WeatherApp.Interfaces.Enums;
    import services = Cachematrix.WeatherApp.Services;
    import models = Cachematrix.WeatherApp.Models;
    import interfaces = Cachematrix.WeatherApp.Interfaces;

    test("A", ()=> {

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


        var detailsScreenVisited: boolean = false;
        var mainScreenVisited: boolean = false;
        //TypeScript has classes, but it also lets object literals implement interfaces.  Very handy in Unit testing 
        var pageTransitionsService: interfaces.IPageTransitionsService = {
            moveToDetailsScreen: ()=> {
                detailsScreenVisited = true;
            },
            moveToMainScreen: ()=> {
                mainScreenVisited = true;
            }
        };

        var appVm = new vms.AppVM(new services.DataService(), new services.DataMapper(), pageTransitionsService);

        strictEqual(appVm.homePageVm.currentConditions.temp(), 100);
    });

    


} 