import { getUVColor, getWeatherIcon } from './utils';
import { format, parse } from 'date-fns';

// Display loader
function displayLoader() {
  // Display loader element
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';

  // Hide error msg
  const errorMsg = document.querySelector('.error-msg');
  errorMsg.style.display = 'none';

  // Hide forecast container till finished loading
  const forecastCtn = document.querySelector('.forecast-container');
  forecastCtn.style.display = 'none';
}

// Display error msg
function displayErrorMsg(error) {
  // Remove loader
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';

  // Hide forecast ctn
  const forecastCtn = document.querySelector('.forecast-container');
  forecastCtn.style.display = 'none';

  // Create error msg el
  const errorMsg = document.querySelector('.error-msg');
  errorMsg.textContent = error;
  errorMsg.style.display = 'block';
}

// Render forecast data
function renderForecastData(data) {
  // Hide loader
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';

  // Hide error msg
  const errorMsg = document.querySelector('.error-msg');
  errorMsg.style.display = 'none';

  // Display forecast ctn
  const forecastCtn = document.querySelector('.forecast-container');
  forecastCtn.style.display = 'block';

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
  datetime.textContent =
    format(data.days[0].datetime, 'MMMM dd, yyyy') +
    ' | ' +
    format(
      parse(data.currentConditions.datetime, 'HH:mm:ss', new Date()),
      'hh:mm a',
    );
  weatherIconCtn.innerHTML = getWeatherIcon(data.currentConditions.icon);
  temperature.textContent = data.currentConditions.temp + '°C';
  weatherCondition.textContent = data.currentConditions.conditions;
  feelsLike.textContent = `Feels like ${data.currentConditions.feelslike}°C`;
  windSpeed.textContent = data.currentConditions.windspeed + ' km/h';
  humidity.textContent = data.currentConditions.humidity + '%';
  chanceOfRain.textContent = data.days[0].precipprob + '%';

  UVIndex.textContent = data.days[0].uvindex;
  UVIndex.style.backgroundColor = getUVColor(data.days[0].uvindex);

  sunrise.textContent = format(
    parse(data.currentConditions.sunrise, 'HH:mm:ss', new Date()),
    'hh:mm a',
  );
  sunset.textContent = format(
    parse(data.currentConditions.sunset, 'HH:mm:ss', new Date()),
    'hh:mm a',
  );
}

export { renderForecastData as default, displayLoader, displayErrorMsg };
