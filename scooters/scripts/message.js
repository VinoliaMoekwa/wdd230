//Weather info

// the elements from the document
const message = document.getElementById("message");
const closeBtn = document.getElementById("close-btn");
const tempMax = document.getElementById("temp-max");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const main = document.getElementById("main");
const description = document.getElementById("description");
const icon = document.getElementById("icon");
const forecast = document.getElementById("forecast");

const apiKey = "ea0ef6d4bca4ed72adb77eca9be718";
const apiUrl = "https://api.openweathermap.org/data/2.5/";

// function to fetch the weather data
async function getWeatherData() {
  try {
    // current weather data
    const response = await fetch(apiUrl + "weather?q=Cozumel&units=metric&appid=" + apiKey);
    const data = await response.json();
    // current weather data on the page
    tempMax.textContent = data.main.temp_max;
    temp.textContent = data.main.temp;
    humidity.textContent = data.humidity;
    main.textContent = data.weather[0].main;
    description.textContent = data.weather[0].description;
    icon.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
    //  forecast data 
    const response2 = await fetch(apiUrl + "forecast?q=Cozumel&units=metric&appid=" + apiKey);
    const data2 = await response2.json();
    // forecast data for tomorrow at 15:00
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(15, 0, 0, 0);
    const forecastData = data2.list.find(item => new Date(item.dt_txt).getTime() === tomorrow.getTime());
    //  forecast data on the page
    forecast.textContent = forecastData.main.temp;
  } catch (error) {
    // Handle any errors
    console.error(error);
  }
}

// function to close the message
function closeMessage() {
  message.style.display = "none";
}

// how to close the close button
closeBtn.addEventListener("click", closeMessage);

// getWeatherData function when the page loads
getWeatherData();

