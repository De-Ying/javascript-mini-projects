const apiKey = "366b40130d3c045311827254bdd2d187";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = $(".search input");
const searchBtn = $(".search button");
const weatherIcon = $(".weather-icon");
const errorElement = $(".error");
const weatherElement = $(".weather");
const cityElement = $(".city");
const tempElement = $(".temp");
const humidityElement = $(".humidity");
const windElement = $(".wind");

function updateUI(data) {
  cityElement.html(data.name);
  tempElement.html(Math.round(data.main.temp) + "°C");
  humidityElement.html(data.main.humidity + "%");
  windElement.html(data.wind.speed + "km/h");

  switch (data.weather[0].main) {
    case "Clouds":
      weatherIcon.attr("src", "assets/images/clouds.png");
      break;
    case "Clear":
      weatherIcon.attr("src", "assets/images/clear.png");
      break;
    case "Rain":
      weatherIcon.attr("src", "assets/images/rain.png");
      break;
    case "Drizzle":
      weatherIcon.attr("src", "assets/images/drizzle.png");
      break;
    case "Mist":
      weatherIcon.attr("src", "assets/images/mist.png");
      break;
    case "Snow":
      weatherIcon.attr("src", "assets/images/snow.png");
      break;
    default:
      // Handle other weather conditions or set a default image
      break;
  }

  weatherElement.show();
  errorElement.hide();
}

function getWeather(city) {
  fetch(apiUrl + city + `&appid=${apiKey}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => updateUI(data))
    .catch((error) => {
      console.error("Error fetching weather:", error);
      errorElement.show();
      weatherElement.hide();
    });
}

searchBtn.click(function () {
  getWeather(searchBox.val());
});

// Optionally, handle Enter key press in the input field
searchBox.keyup(function (event) {
  if (event.key === "Enter") {
    getWeather(searchBox.val());
  }
});
