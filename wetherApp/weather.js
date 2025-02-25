document.addEventListener('DOMContentLoaded', ()=>{
    const cityInput = document.getElementById("city-input")
    const getWeatherButton = document.getElementById("get-wether-button")
    const weatherInfo = document.getElementById("weather-info")
    const cityNameDisplay = document.getElementById("city-name")
    const tempreatureDisplay = document.getElementById("tempreture")
    const descriptionDisplay = document.getElementById("description")
   // const errorMassage =  // move forword than add in env variable

    getWeatherButton.addEventListener('click', async() =>{
        const city = cityInput.value.trime()
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
        const url =`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid={API Key}`
    }

    function displayWeatherdata(weatherdata) {
        // display
    }

    function showError() {
        weatherInfo.classList.add('hidden');
        errorMassage.classList.remove('hidden')
    }
})
