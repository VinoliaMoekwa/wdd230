const currentTemp = document.querySelector('#currentTemp');
const weatherIcon = document.querySelector('#weatherIcon');
const captionDesc = document.querySelector('#captionDesc');
const forecastContainer = document.getElementById('forecast-container');

const urlCurrent = 'https://api.openweathermap.org/data/2.5/weather?lat=-29.07076&lon=26.12374&units=imperial&appid=ea0ef6d4bca4ed72adb77eca9be71837';
const apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=-29.06319839504859&lon=26.159778705935214&exclude=current,minutely,hourly&appid=ea0ef6d4bca4ed72adb77eca9be71837`;

Promise.all([
  fetch(urlCurrent).then(response => response.json()),
  fetch(apiUrlForecast).then(response => response.json())
])
  .then(([currentData, forecastData]) => {
    // Display current temperature information
    displayCurrent(currentData);

    // Process and display forecast information
    displayForecast(forecastData);
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });

function displayCurrent(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}

function displayForecast(data) {
  const forecast = data.daily.slice(1, 4);

  forecast.forEach(day => {
    const date = new Date(day.dt * 1000); // Convert UNIX timestamp to date
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    const weatherDescription = day.weather[0].description;
    const maxTemp = day.temp.max;
    const minTemp = day.temp.min;

    // Create a forecast element for each day
    const forecastElement = document.createElement('div');
    forecastElement.classList.add('forecast-day');

    // Add forecast information to the forecast element
    forecastElement.innerHTML = `
      <h3>${dayOfWeek}</h3>
      <p>${weatherDescription}</p>
      <p>Max: ${maxTemp}°C</p>
      <p>Min: ${minTemp}°C</p>
    `;

    // Append the forecast element to the forecast container
    forecastContainer.appendChild(forecastElement);
  });





}
