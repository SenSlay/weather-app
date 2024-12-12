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
  console.log(data);

  // Hide loader
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';

  // Hide error msg
  const errorMsg = document.querySelector('.error-msg');
  errorMsg.style.display = 'none';

  // Display forecast ctn
  const forecastCtn = document.querySelector('.forecast-container');
  forecastCtn.style.display = 'flex';

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
    format(data.days[0].datetime, 'E, MMMM dd, yyyy') +
    ', ' +
    format(
      parse(data.currentConditions.datetime, 'HH:mm:ss', new Date()),
      'hh:mm a',
    );

  const existingSvg = weatherIconCtn.querySelector('svg');
  
  if (existingSvg) {
    // Remove the existing <svg>
    existingSvg.remove();
  }
  
  weatherIconCtn.insertAdjacentHTML('afterbegin', getWeatherIcon(data.currentConditions.icon));
  weatherCondition.textContent = data.currentConditions.conditions;
  temperature.textContent = data.currentConditions.temp + '°C';
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

  // Next 5 Days data
  const dayCards = document.querySelectorAll('.day-card');
  
  let dayCount = 1;
  
  dayCards.forEach((dayCard) => {
    const datetime = dayCard.querySelector('h3');
    const condition = dayCard.querySelector('.condition');
    const temp = dayCard.querySelector('.temp');
    const innerDiv = dayCard.querySelector('div');

    if (!datetime || !condition || !temp) {
      throw new Error('Code Error');
    }
    // Display datetime
    datetime.textContent = format(data.days[dayCount].datetime, 'E, do');

    // Check if svg exists
    const existingSvg = dayCard.querySelector('svg');
    if (existingSvg) {
      // Remove the existing <svg>
      existingSvg.remove();
    }
    // Insert svg
    innerDiv.insertAdjacentHTML('afterbegin', getWeatherIcon(data.days[dayCount].icon));

    // Display condition
    condition.textContent = data.days[dayCount].conditions;

    // Display temp
    temp.textContent = data.days[dayCount].temp + '°C';

    dayCount++;
  });
}

(function scrollDragging() {
  const scrollingWrapper = document.querySelector('.scrolling-wrapper');
  const dayCards = document.querySelectorAll('.day-card');

  let isDragging = false;
  let startX, scrollLeft;

  // Add event listeners to the wrapper
  scrollingWrapper.addEventListener('mousedown', (e) => {
    const dayCard = e.target.closest('.day-card');
  
    if (dayCard) {
      // Add 'active' to the closest day-card
      dayCard.classList.add('active');
    }
    isDragging = true;
    scrollingWrapper.classList.add('active');
    startX = e.pageX - scrollingWrapper.offsetLeft;
    scrollLeft = scrollingWrapper.scrollLeft;
  });

  scrollingWrapper.addEventListener('mouseleave', () => {
    isDragging = false;
    scrollingWrapper.classList.remove('active');
    // Remove 'active' from all day-cards
    dayCards.forEach((card) => card.classList.remove('active'));
  });

  scrollingWrapper.addEventListener('mouseup', () => {
    isDragging = false;
    scrollingWrapper.classList.remove('active');// Remove 'active' from all day-cards
    dayCards.forEach((card) => card.classList.remove('active'));
  });

  scrollingWrapper.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollingWrapper.offsetLeft;
    const walk = (x - startX) * 2; // Adjust for scroll speed
    scrollingWrapper.scrollLeft = scrollLeft - walk;
  });

  // Add event listeners to each card
  dayCards.forEach((card) => {
    card.addEventListener('mousedown', () => {
      scrollingWrapper.classList.add('active');
    });

    card.addEventListener('mouseup', () => {
      scrollingWrapper.classList.remove('active');
    });

    card.addEventListener('mousemove', (e) => {
      e.preventDefault();
    });
  });
})();

export { renderForecastData as default, displayLoader, displayErrorMsg };
