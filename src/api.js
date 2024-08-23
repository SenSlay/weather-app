// Get weather forecast data on a location by using weather.visualcrossing.com API
async function getLocationForecastData(location) {
    // Promise implementation
    /* 
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=FNMEC42CA9CLAVPZ58JSRLYG8`, {mode: 'cors'})
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        }); 
    */

    // Async/Await Implementation
    try {
        const APIkey = 'FNMEC42CA9CLAVPZ58JSRLYG8'
        const response =  await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?unitGroup=metric&key=${APIkey}`, { mode: 'cors' });

        if (!response.ok) {
            throw new Error('Location not found.');
        }
        const forecastData = await response.json();
        console.log(forecastData);
        return forecastData;
    } catch (error) {
        throw error;
    }
}

export default getLocationForecastData;