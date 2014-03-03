 module Cachematrix.WeatherApp {

     import vms = Cachematrix.WeatherApp.ViewModels;
     import services = Cachematrix.WeatherApp.Services;

     export function init() {
         var dataService = services.getDataService();
         var dataMapper = new services.DataMapper();
         var appVm = new vms.AppVM(dataService, dataMapper);

         console.log(appVm);

         ko.applyBindings(appVm);
     }

 }