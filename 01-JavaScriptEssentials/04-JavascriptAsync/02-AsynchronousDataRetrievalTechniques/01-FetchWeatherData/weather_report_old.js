const domain = "https://api.openweathermap.org/";

const geoUrl = "geo/1.0/direct";
const apiUrl = "data/2.5/weather";

//!! pretty sure this publicly exposes my api key !!
const aid = "appid=lookup_real_key"; // actually got an alert


document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails);

/**
 * Fetch data using OpenWeather API
 *
 * @param {submit} event - from form button click
 */
function showWeatherDetails(event) {
  // stop usual form submission event
  event.preventDefault();

  // get city name from form
  const city = document.getElementById('city').value;

  // construct geoCall for fetch
  const geoCity = `?q=${city}&limit=1`;
  const geoCall = `${domain}${geoUrl}${geoCity}&${aid}`;

  // fetch geoInformation
  fetch(geoCall)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return {
        lat: data[0].lat,
        lon: data[0].lon
      };
    })
    .then((coords) => {
      // extract lon & lat from geoInformation into apiCall for fetch
      const lat = `lat=${coords.lat}`;
      const lon = `lon=${coords.lon}`;
      const apiCall = `${domain}${apiUrl}?${lat}&${lon}&${aid}`;

      // fetch weather information
      fetch(apiCall)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          displayWeather(data);
        })
        .catch((error) => {
          console.error(
            `There was an error fetching weather information for ${city}`,
            error
          );
        });
    })
    .catch((error) => {
      console.error(
        `There was an error fetching information for ${city} coordinates`,
        error
      );
    });
}

/**
 * Extract weather information from the data object and display it on the web
 * page
 *
 * @param {object} data - parsed from OpenWeather API json response
 */
function displayWeather(data) {

  // reset display
  const parent = document.getElementById('weatherInfo');
  parent.innerHTML = "";

  // weather info
  const city = data.name;
  const weather = data.weather[0].main;
  const temp = KelvinToCelsius(data.main.temp);

  // constructing html elements
  const heading = document.createElement('h2');
  heading.textContent = `Current Weather In ${city}`;

  const list = document.createElement('ul');

  const li_weather = document.createElement('li');
  li_weather.innerHTML = `<strong>Weather:</strong> ${weather}`;
  list.appendChild(li_weather);

  const li_temp = document.createElement('li');
  li_temp.innerHTML = `<strong>Temperature:</strong> ${temp} &#8451;`;
  list.appendChild(li_temp);


  parent.appendChild(heading);
  parent.appendChild(list);
}

/**
 * Converts temperature from Kelvin to Celsius, rounds to 1dp
 *
 * @param {number} k - temp in Kelvin
 * @returns {number} - temp in Celsius
 */
const KelvinToCelsius = (k) => (Math.round((k - 273.15) * 10)) / 10;
