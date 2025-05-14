# Weather Report

I thought I could do this on my own. And, I did ... eventually.

## Lesson 1

### Read API Documentation Fully & Carefully...

By not getting to the end of the instructions I thought I __had__ to use longitude and latitude values - adding a significant degree of complexity. If I had continued reading I would have found the section on "request by city name" the lab uses.

## Lesson 2

### Promises Return Promises

No matter what I tried I could not get a promise to return its value. I can use the value data while inside the promise, but outside it is always a promise object with the value obscured.

I finally solved the problem by creating a nested chain of `.then()`; but, this cannot be the preferred solution. It's stupid, verbose, inelegant, and so forth.

This very much solidifies the fact I can bumble by, but do not understand what is going on; and, it is an issue.

## Lab Code

```javascript
function showWeatherDetails(event) {
  event.preventDefault();

  const city = document.getElementById('city').value;
  const apiKey = '35706ca352a3b508193a298076f684f9';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
    })
}

document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails);
```

## Revision

The old code is in [this file](./weather_report_old.js). The updated code is a little better, but stills doesn't feel like I am fully leveraging the potential available.


