const API_KEY = "3cfa7f74a12cc25b61bd53ed27f51cbf";
const apiCountryUrlStart = "https://flagsapi.com/";
const apiCountryUrlFinish = "/flat/64.png";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const weatherData = document.querySelector("#weather-data")
const cityElement = document.querySelector("#city")
const temperatureElement = document.querySelector("#temperature span");
const descriptionElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");


const getWeatherData = async(city) => {
    const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=pt_br`;

    const res = await fetch(apiWeatherUrl);
    const data = await res.json();

    return data;
}

const showWeatherData = async(city) => {
    const data = await getWeatherData(city);

    cityElement.innerText = data.name;
    temperatureElement.innerText = data.temp;
    descriptionElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    countryElement.setAttribute("src", apiCountryUrlStart + data.sys.country + apiCountryUrlFinish);
    temperatureElement.innerText = data.main.temp;
    humidityElement.innerText = data.main.humidity;
    windElement.innerText = data.wind.speed;

    weatherData.removeAttribute("class");
};

searchBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    
    const city = cityInput.value;

    showWeatherData(city);
})