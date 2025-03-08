// Not use only for understanding purpose  how work api respose only learn



document.getElementById("get-weather-button").addEventListener("click", () => {
    const apiKey = "bffafbb91b9ccde2c5c1dfe6a0ecb16a"; //  OpenWeatherMap API key
    const city = document.getElementById("city-input").value;
    if (!city) return;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                document.getElementById("error-message").classList.remove("hidden");
                document.getElementById("weather-info").classList.add("hidden");
            } else {
                document.getElementById("city-name").textContent = data.name;
                document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById("description").textContent = data.weather[0].description;
                document.getElementById("weather-info").classList.remove("hidden");
                document.getElementById("error-message").classList.add("hidden");
            }
        })
        
        .catch(() => {
            document.getElementById("error-message").classList.remove("hidden");
            document.getElementById("weather-info").classList.add("hidden");
        });
});
