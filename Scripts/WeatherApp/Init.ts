/// <reference path="../typings/jquery/jquery.d.ts" />

module Cachematrix.WeatherApp
{

     import vms = Cachematrix.WeatherApp.ViewModels;
     import services = Cachematrix.WeatherApp.Services;

     export function init() {
         var dataService = services.getDataService();
         var dataMapper = new services.DataMapper();
         var pageTransitionsService = new services.PageTransitionsService($, "#main-page", "#details-page");

         var appVm = new vms.AppVM(dataService, dataMapper, pageTransitionsService);

         console.log(appVm);

         ko.applyBindings(appVm);
     }

 }