module Cachematrix.WeatherApp.Interfaces.Enums {

    export enum Condition {
        Sunny,
        Cloudy
    }

    //Examples
    //console.log(Condition.Cloudy); //Yields 1
    //console.log(Condition[Condition.Cloudy]); //Yields "Cloudy"
    //console.log(Condition["Cloudy"]); //Yields 1

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