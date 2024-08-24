import './style.css';
import getLocationForecastData from './api';
import renderForecastData, { displayLoader, displayErrorMsg } from './dom';

// Get forecast data of default location- Quezon City, Philippines
try {
  displayLoader();
  const data = await getLocationForecastData('Quezon City');
  renderForecastData(data);
} catch (error) {
  console.log(error);
  displayErrorMsg(error);
}

const form = document.getElementById('form');

form.addEventListener('submit', async (event) => {
  const target = event.target;
  event.preventDefault();

  // Get value from user input and use function to get data
  const location = target.querySelector('#location-input').value;

  // Display loader as we wait to receive the data from the API
  displayLoader();

  try {
    const data = await getLocationForecastData(location);
    renderForecastData(data);
  } catch (error) {
    console.log(error);
    displayErrorMsg(error);
  }
});
