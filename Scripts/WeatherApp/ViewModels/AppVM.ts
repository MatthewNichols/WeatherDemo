module Cachematrix.WeatherApp.ViewModels {
     
    import interfaces = Cachematrix.WeatherApp.Interfaces;

    export class AppVM {
        constructor(private dataService: interfaces.IDataService) {
            var data = dataService.getData();
            this.parseData(data);
        }

        homePageVm: HomePageVM;            
        detailsPageVm: DetailsPageVM;

        parseData(rawData) {
            
        }
    }

}