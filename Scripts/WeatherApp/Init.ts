 module Cachematrix.WeatherApp {

     import vms = Cachematrix.WeatherApp.ViewModels;
     import services = Cachematrix.WeatherApp.Services;

     export function init() {
         var dataService = services.getDataService();
         var appVm = new vms.AppVM(dataService);

         ko.applyBindings(appVm);
     }

 }