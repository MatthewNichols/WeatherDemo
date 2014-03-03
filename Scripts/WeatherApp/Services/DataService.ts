module Cachematrix.WeatherApp.Services {
    import interfaces = Cachematrix.WeatherApp.Interfaces;

    var webserviceUrl: string = "http://somedefaultURL";

    export function getDataService(webserviceUrl?: string): interfaces.IDataService
    {
        //If a webserviceUrl is specified then override the default.
        if (webserviceUrl != null) {
            this.webserviceUrl = webserviceUrl;
        }

        return new DataService();
    }

    export class DataService implements interfaces.IDataService
    {
        getData(): any {
            return {
                currentConditions: { temp: 52, windSpeed: 5, windDirection: "NW" },
                days: [
                    { dayIndex: 0, lowTemp: 50, highTemp: 50, windSpeed: 5, windDirection: "NW", humidity: 0.47, sunrise: 635, sunset: 1749, moonrise: 635, moonset: 1749, moonDesc: "Waning Crescent, 4% of the Moon is Illuminated" },
                    { dayIndex: 1, lowTemp: 50, highTemp: 50, windSpeed: 5, windDirection: "NW", humidity: 0.47, sunrise: 635, sunset: 1749, moonrise: 635, moonset: 1749, moonDesc: "Waning Crescent, 4% of the Moon is Illuminated" },
                    { dayIndex: 2, lowTemp: 50, highTemp: 50, windSpeed: 5, windDirection: "NW", humidity: 0.47, sunrise: 635, sunset: 1749, moonrise: 635, moonset: 1749, moonDesc: "Waning Crescent, 4% of the Moon is Illuminated" }
                ]
            };
        }
    }

    

} 