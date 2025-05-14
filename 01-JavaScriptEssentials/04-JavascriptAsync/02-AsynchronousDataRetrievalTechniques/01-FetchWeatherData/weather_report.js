const domain = "https://api.openweathermap.org/";

const geoUrl = "geo/1.0/direct";
const apiUrl = "data/2.5/weather";

//!! pretty sure this publicly exposes my api key !!
const aid = "appid=35706ca352a3b508193a298076f684f9";


document.getElementById('weatherForm').addEventListener('submit', getGeoInfo);

function getGeoInfo(event) {
  // stop usual form submission event
  event.preventDefault();

  // get city name from form
  const city = document.getElementById('city').value;

  // construct geoCall for fetch
  const geoCity = `?q=${city}&GB&limit=1`;
  const geoApi = `${domain}${geoUrl}${geoCity}&${aid}`;

  fetch(geoApi)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const lat = `lat=${data[0].lat}`;
      const lon = `lon=${data[0].lon}`;
      const apiCall = `${domain}${apiUrl}?${lat}&${lon}&${aid}`;
      getWeatherInfo(apiCall);
    })
    .catch((error) => {
      console.error(
        `There was an error fetching information for ${city} coordinates`,
        error
      );
    });
}

function getWeatherInfo(weatherApi) {
  fetch(weatherApi)
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
}

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

const KelvinToCelsius = (k) => (Math.round((k - 273.15) * 10)) / 10;
