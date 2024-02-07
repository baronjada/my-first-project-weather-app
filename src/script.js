function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let weatherAppCity = document.querySelector("#weather-app-city");
  weatherAppCity.innerHTML = searchInput.value;
}

function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let temperatureElement = document.querySelector("#weather-app-temperature");
  temperatureElement.innerHTML = temperature;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchCity);

let city = "London";
let apiKey = "7789b9fafffta3o538f2b30e883d3734";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

axios.get(apiUrl).then(displayTemperature);
