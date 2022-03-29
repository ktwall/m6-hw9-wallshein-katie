var form = document.querySelector('form')
var input = document.querySelector('input')
var weather = document.querySelector('weather')


form.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(Object.fromEntries(new FormData(e.target)))
    fetch('https://api.openweathermap.org/data/2.5/weather?appid=a502e2667bdfdef9e5cc8724f2b91a62&units=imperial&q=' + input.value)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            input.value = "";
        })
        .catch(function (error) {
            console.log(error);
            weather.innerHTML = "Please try a different location"
        })
})

function weatherResult(weatherObject) {
    weather.innerHTML = "";

    if (weatherObject.Response === 'False') {
        weather.textContent = 'Please try a different location';
        return //*response.json()
    }

    var city = document.createElement('h2')
    city.textContent = weatherObject.name + ", " + weatherObject.sys.country
    weather.appendChild(city)

    var description = document.createElement('h3')
    description.textContent = "Weather: " + weatherObject.weather[0].description;
    weather.appendChild(description)

    var img = document.createElement('img')
    img.src = "http://openweathermap.org/img/wn" + weatherObject.weather[0].icon + "@2x.png";
    weather.appendChild(img)

    var temperature = document.createElement('h3')
    temperature.textContent = "Current: " + weatherObject.main.temp;
    weather.appendChild(temperature)

    var feelsLike = document.createElement('h3')
    feelsLike.textContent = "Feels like : " + weatherObject.main.feels_like;
    weather.appendChild(feelsLike)

    return weatherObject

}

