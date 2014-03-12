/// <reference path="../../typings/jquery/jquery.d.ts" />

module Cachematrix.WeatherApp.Services
{
    import interfaces = Cachematrix.WeatherApp.Interfaces;

    var currentPageClassName = "current-page";
    
    export class PageTransitionsService implements interfaces.IPageTransitionsService
    {
        constructor($: JQueryStatic, private mainScreenSelector: string, private detailsScreenSelector: string) {
            this.mainScreen = $(mainScreenSelector);
            this.detailsScreen = $(detailsScreenSelector);
        }

        private mainScreen: JQuery;
        private detailsScreen: JQuery;

        public moveToDetailsScreen(): void 
        {
            this.mainScreen.removeClass(currentPageClassName);
            this.detailsScreen.addClass(currentPageClassName);
        }

        public moveToMainScreen(): void
        {
            this.detailsScreen.removeClass(currentPageClassName);
            this.mainScreen.addClass(currentPageClassName);
        }
    }

}