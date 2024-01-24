const input = document.getElementById("input");
const searchBtn = document.getElementById("search-btn");
const background = document.getElementById("background");

const url = "https://api.open-meteo.com/v1/meteofrance?latitude=43.31&longitude=3.42&current=temperature_2m,weather_code,wind_speed_10m";

let output = {};

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        output = {
            temperature: data.current.temperature_2m,
            weather: data.current.weather_code,
            wind: data.current.wind_speed_10m,
        };
        console.log(output);
    })
    .then(() => {
        backgroundSelector(output.weather);
        console.log(output.weather);
    });

function backgroundSelector(weather) {
    switch (true) {
        case weather >= 0 && weather <= 10:
            background.src = "/assets/img/sunny.jpg";
            break;
        case weather > 10 && weather <= 19:
            background.src = "/assets/img/cloudy.jpg";
            break;
        case weather > 19 && weather <= 28:
            background.src = "/assets/img/rainy.jpg";
            break;
        case weather > 28 && weather <= 99:
            background.src = "/assets/img/thunder.jpg";
            break;
        default:
            background.src = "/assets/img/default_weather.jpg";
            console.log("weather unavailable");
    }
}
