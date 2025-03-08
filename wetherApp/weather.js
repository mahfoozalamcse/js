document.addEventListener('DOMContentLoaded', ()=>{
    const cityInput = document.getElementById("city-input")
    const getWeatherButton = document.getElementById("get-wether-button")
    const weatherInfo = document.getElementById("weather-info")
    const cityNameDisplay = document.getElementById("city-name")
    const tempreatureDisplay = document.getElementById("tempreture")
    const descriptionDisplay = document.getElementById("description")
    const errorMassage = document.getElementById("errormassage")

    const API_KEY = "bffafbb91b9ccde2c5c1dfe6a0ecb16a";

    getWeatherButton.addEventListener('click', async() =>{
        const city = cityInput.value.trim();
        if(!city) return;
        // remember server may through error when request third party
        // server or data base is another continent

        try {
            const wetherData = await fetchWeatherdata(city);
            displayWeatherdata(wetherData);
        } catch (error) {
            showError();
        }

        
    })

    async function fetchWeatherdata(city) {
        // get the data
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

      const response = await fetch(url)
      console.log(typeof response);
      console.log("RESPONSE", response);

      if (!response.ok) {
        throw new Error("City is not found ");
      }
      const data = await response.json()
      return data;
    }

    function displayWeatherdata(data) {
        // display
        console.log(data); // give response 3rd party spend 2 days understand
        const {name, main, weather} = data;
        cityNameDisplay.textContent = name;



        // unlock the dislay
        weatherInfo.classList.remove('hidden');
        errorMassage.classList.add('hidden');
        tempreatureDisplay.textContent = `Temperature : ${main.temp}`
        descriptionDisplay.textContent = `Weather : ${weather[0].description}`

    }

    function showError() {
        weatherInfo.classList.add('hidden');
        errorMassage.classList.remove('hidden')
    }
})
