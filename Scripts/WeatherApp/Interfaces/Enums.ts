module Cachematrix.WeatherApp.Interfaces.Enums {

    export enum BasicCondition {
        Sunny,
        Cloudy,
        Rainy
    }

    //Examples
    //console.log(BasicCondition.Cloudy); //Yields 1
    //console.log(BasicCondition[BasicCondition.Cloudy]); //Yields "Cloudy"
    //console.log(BasicCondition["Cloudy"]); //Yields 1

    export enum DayIndex {
        Today,
        Tomorrow,
        DayAfterTomorrow
    }

    export enum Direction
    {
        N,
        NE,
        E,
        SE,
        S,
        SW,
        W,
        NW
    }
}