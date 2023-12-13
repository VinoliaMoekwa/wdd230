const apiKey = 'ea0ef6d4bca4ed72adb77eca9be71837';
const city = 'Cozumel';

// Fetch weather data from OpenWeatherMap API
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const kelvinToCelsius = kelvin => (kelvin - 273.15).toFixed(1);

        const currentTemp = kelvinToCelsius(data.list[0].main.temp);
        const currentHumidity = data.list[0].main.humidity;
        const nextDayTemp = kelvinToCelsius(data.list.find(item => item.dt_txt.includes('15:00')).main.temp);
        const weatherDescription = data.list[0].weather[0].description;
        const weatherIcon = data.list[0].weather[0].icon;

        // Display weather information on the webpage
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `
            <h2>Weather Information</h2>
            <p>Current Temperature: ${currentTemp} °C</p>
            <p>Current Humidity: ${currentHumidity}%</p>
            <p>Next Day's Forecast (3:00 PM): ${nextDayTemp} °C</p>
            <p>Weather: ${weatherDescription}</p>
            <img class="weather-icon" src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="Weather Icon">
        `;
    })
    .catch(error => {
        console.log('Error fetching weather data:', error);
    });

    
        