var form = document.querySelector('form')
var locationInput = document.querySelector('input[type=text]')
var weatherInput = document.querySelector('input[type=number]')

    form.onsubmit = function(e){
        e.preventDefault()
        console.log(locationInput.value)
        //*console.log(weatherInput.value)
        //*console.log(Object.fromEntries(formData))
        fetch('https://api.openweathermap.org/data/2.5/weather?appid=a502e2667bdfdef9e5cc8724f2b91a62&units=imperial&q=' + locationInput.value) 
        .then(function(response) {
        return response.json() 
    })
        .then(function(data) {
        console.log(data) 
    })
    .catch(function(error) {
        console.log(error);
    })
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