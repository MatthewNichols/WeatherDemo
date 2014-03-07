/// <reference path="../../typings/jquery/jquery.d.ts" />

module Cachematrix.WeatherApp.Services
{
    var currentPageClassName = "current-page";

    export class PageTransitionsService
    {
        constructor($: JQueryStatic, private mainScreenSelector: string, private detailsScreenSelector: string) {
            this.mainScreen = $(mainScreenSelector);
            this.detailsScreen = $(detailsScreenSelector);
        }

        private mainScreen: JQuery;
        private detailsScreen: JQuery;

        public moveToDetailsScreen() : void {
            console.log("moveToDetailsScreen");
                    
            this.mainScreen.removeClass(currentPageClassName);
            this.detailsScreen.addClass(currentPageClassName);
        }

        public moveToMainScreen(): void
        {
            console.log("moveToMainScreen");

            this.detailsScreen.removeClass(currentPageClassName);
            this.mainScreen.addClass(currentPageClassName);
        }
    }

}