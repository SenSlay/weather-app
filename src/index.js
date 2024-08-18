import "./style.css";

async function getLocationData(city) {
    // Promise implementation
    // fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=FNMEC42CA9CLAVPZ58JSRLYG8`, {mode: 'cors'})
    //     .then(function(response) {
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         return response.json();
    //     })
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         console.error('There was a problem with the fetch operation:', error);
    //     });

    // Async/Await Implementation
    const response =  await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=FNMEC42CA9CLAVPZ58JSRLYG8`);
    const data = await response.json();
    console.log(data);
}

getLocationData("Manila");
