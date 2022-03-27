var form = document.querySelector('form')
var nameInput = document.querySelector('input[type=text]')
var weatherInput = document.querySelector('input[type=weather]')

form.onsubmit = function(e){
    e.preventdefault()
    var formData = new FormData(e.target)
    console.log(nameInput.value)
    //*console.log(weatherInput.value)
    //*console.log(Object.fromEntries(formData))
    if(!usersInput) return
    fetch('https://api.openweathermap.org/data/2.5/weather?q=&appid=a502e2667bdfdef9e5cc8724f2b91a62&units=imperial') 
    .then(function(res) {
    return res.json() 
})
    .then(function(res) {
    console.log(res) 
    InputEvent.value = "";
  })
  .catch(function(error) {
      console.log(error);
      document.getElementById('weather').innerHTML = "Location not found."
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