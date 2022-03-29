var form = document.querySelector('form')
var locationInput = document.querySelector('input[type=text]')
var weatherInput = document.querySelector('input[type=number]')

//*let form = document.querySelector('form')
//*let input = document.querySelector('input')
//*let weather = document.querySelector('weather')

//*form.onsubmit = function(e){
//*e.preventDefault()
//*console.log(locationInput.value)
//*console.log(weatherInput.value)
//*console.log(Object.fromEntries(formData))
form.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(Object.fromEntries(new FormData(e.target)))
    fetch('https://api.openweathermap.org/data/2.5/weather?appid=a502e2667bdfdef9e5cc8724f2b91a62&units=imperial&q=' + locationInput.value)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            locationInput.value = "";
        })
        .catch(function (error) {
            console.log(error);
            weatherInput.innerHTML = "Please try a different location"
        })
})

function weatherInputResult(weatherInput) {
    weatherInput.innerHTML = "";

    if (weatherInput.Response === 'False') {
        weatherInput.textContent = 'Please try a different location';
        return response.json()
    }

    var city = document.createElement('h2');
    city.text = weatherInput.name + ", " + weatherInput.sys.country;
        weather.appendChild(cityName);

    var description = document.createElement('h3')
    description.textContent = "Weather: " + weatherInput.weather(0).description;
        weather.appendChild(description);

    var img = document.createElement('img');
    img.src = "http://openweathermap.org/img/wn" + weatherInput.weather(0).icon + "@2x.png";
        weather.appendChild(img)

    var temperature = document.createElement('h3')
    temperature.textContent = "Current: " + weatherInput.main.temp;
        weather.appendChild(temperature);

    var feelsLike = document.createElement('h3')
    feelsLike.textContent = "Feels like : " + weatherInput.main.feels_like;
        weather.appendChild(feelsLike);
}





//*fetch('https://api.openweathermap.org/data/2.5/weather?q=&appid=a502e2667bdfdef9e5cc8724f2b91a62&units=imperial') // make the request
//*.then(function(res) {
//*  return res.json() // when the response is received, convert to json
//*})
//*.then(function(res) {
//* console.log(res) // when the json is converted, log it
//your code goes here
//*})

console.log('Here!') // note this will log BEFORE fetch is finished