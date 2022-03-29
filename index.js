var form = document.querySelector('form')
var input = document.querySelector('input')
var weather = document.getElementById('weather')

function weatherResult(weatherObject) {
    weather.innerHTML = "";
    console.log('test'+weatherObject)
    if (weatherObject.Response === 'False') {
        weather.textContent = 'Please try a different location';
        return //*response.json()
    }

    var city = document.createElement('h2')
    city.textContent = weatherObject.name + ", " + weatherObject.sys.country
    weather.appendChild(city)

    var img = document.createElement('img')
    img.src = "https://openweathermap.org/img/wn/" + weatherObject.weather[0].icon + "@2x.png";
    console.log(img.src)
    weather.appendChild(img)

    var description = document.createElement('h3')
    description.textContent = "Weather: " + weatherObject.weather[0].description;
    weather.appendChild(description)

    var temperature = document.createElement('h3')
    temperature.textContent = "Current: " + weatherObject.main.temp + " \u2109";
    weather.appendChild(temperature)

    var feelsLike = document.createElement('h3')
    feelsLike.textContent = "Feels like : " + weatherObject.main.feels_like + " \u2109";
    weather.appendChild(feelsLike)

}

form.addEventListener('submit', function (e, ) {

    e.preventDefault()
    console.log(Object.fromEntries(new FormData(e.target)))

    fetch('https://api.openweathermap.org/data/2.5/weather?appid=a502e2667bdfdef9e5cc8724f2b91a62&units=imperial&q=' + input.value)
        .then(function (fetchedResponse) {
            return fetchedResponse.json();
        })
        .then(function (jsonResponse) {
            console.log(jsonResponse)
            weatherResult(jsonResponse)
        })
        .catch(function (error) {
            console.log(error);
            var error = document.getElementById('weather')
            error.innerHTML = "Please try a different location"
        })
})



