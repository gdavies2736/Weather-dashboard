//Define the API URL
//var apiUrl = https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//My API key for OpenWeather API
var apiKey = "2bbc1080b504d6f4e2cad6a27f5acc94"

//Create city variable
//var city = London


//On click of search button, need event listener

document.getElementById("search-button").addEventListener("click",function(event){
    event.preventDefault();
    document.getElementById("search-input").value;
    var city = document.getElementById("search-input").value;
    var URL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
fetch(URL)
.then(function(response){
    return response.json();
}).then(function(data) {
    console.log(data);
})
})

//units=metric





