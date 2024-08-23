import { getUVColor, getWeatherIcon } from "./utils";

// Display loader
function displayLoader() {
    const loader = document.querySelector('.loader');
    loader.style.display = "block";

    // Hide forecast container till finished loading
    const forecastCtn = document.querySelector('.forecast-container');
    forecastCtn.style.display = "none";
}

// Render forecast data
function renderForecastData(data) {
    // Hide loader once data is ready to be displayed
    const loader = document.querySelector('.loader');
    loader.style.display = "none";

    const forecastCtn = document.querySelector('.forecast-container');
    forecastCtn.style.display = "block";

    const location = document.getElementById('location');
    const datetime = document.getElementById('datetime');
    const weatherIconCtn = document.getElementById('weather-icon-container');
    const temperature = document.getElementById('temperature');
    const weatherCondition = document.getElementById('weather-condition');
    const feelsLike = document.getElementById('feels-like');
    const windSpeed = document.getElementById('wind-speed');
    const humidity = document.getElementById('humidity');
    const chanceOfRain = document.getElementById('chance-of-rain');
    const UVIndex = document.querySelector('.uv-index-color');
    const sunrise = document.getElementById('sunrise');
    const sunset = document.getElementById('sunset');
    
    location.textContent = data.resolvedAddress;
    datetime.textContent = data.days[0].datetime + ' | ' + data.currentConditions.datetime;
    weatherIconCtn.innerHTML = getWeatherIcon(data.currentConditions.icon);
    temperature.textContent = data.currentConditions.temp + '°C';
    weatherCondition.textContent = data.currentConditions.conditions;
    feelsLike.textContent = `Feels like ${data.currentConditions.feelslike}°C`;
    windSpeed.textContent = data.currentConditions.windspeed + ' km/h';
    humidity.textContent = data.currentConditions.humidity + '%';
    chanceOfRain.textContent = data.days[0].precipprob +'%';
    
    UVIndex.textContent = data.days[0].uvindex;
    UVIndex.style.backgroundColor = getUVColor(data.days[0].uvindex);

    sunrise.textContent = data.currentConditions.sunrise;
    sunset.textContent = data.currentConditions.sunset;
}   

export {renderForecastData as default, displayLoader};