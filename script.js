const input = document.getElementById("input");
const searchBtn = document.getElementById("search-btn");

const url = "https://api.open-meteo.com/v1/meteofrance?latitude=52.52&longitude=13.41&current=temperature_2m,weather_code,wind_speed_10m";

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
    });
