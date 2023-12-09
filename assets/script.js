//Define the API URL
//var apiUrl = https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//My API key for OpenWeather API
var apiKey = "2bbc1080b504d6f4e2cad6a27f5acc94"

//Create city variable
//var city = London


//On click of search button, use event listener
//prevent input from refreshing 
//create variable for city entered using inputs value
//use city variable in api request
//request data using api + city (convert units to metric in request)

document.getElementById("search-button").addEventListener("click",function(event){
    event.preventDefault();
    document.getElementById("search-input").value;
    var city = document.getElementById("search-input").value;
    var URL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";
fetch(URL)
.then(function(response){
    return response.json();
}).then(function(data) {
    console.log(data);
    displayCurrentWeather (data);
    todaysdate();
    //document.getElementById("citymainheader").innerText = data[1].name;
})
})

//Display date

function todaysdate (){
var todaysdate = dayjs().format('LL');
console.log(todaysdate);
document.getElementById("todaysdate").innerText = todaysdate;
}

//Add city name
function displayCurrentWeather (data) {
var cityName = data.name;
document.getElementById("citymainheader").innerText = cityName;
var temperature = data.main.temp;
document.getElementById("temperature").innerText = "Temperature: " + temperature + "° Celsius";
var wind = data.wind.speed;
document.getElementById("wind").innerText = "Wind: " + wind + " kmph";
var humidity = data.main.humidity;
document.getElementById("humidity").innerText = "Humidity: " + humidity + "%";
}



//Add current weather to main weather section on page

//document.getElementById("citymainheader").innerText = data.main
//var citymain = 


//request 5 day forecast
//In order to get 5 day forecast:
//1. Need to use Geocoder API to convert city to exact geographical coordinates
//2.Use the co-ordinates to create new api request for 5 day forecast


//to convert city to exact geographical coordinates
//http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}

document.getElementById("search-button").addEventListener("click",function(event){
    event.preventDefault();
    document.getElementById("search-input").value;
    var city = document.getElementById("search-input").value;
var latandlongrequestURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5" + "&appid=" + apiKey;
fetch(latandlongrequestURL)
.then(function(response){
    return response.json();
}).then (function(data){
    //console.log(data);
    //console.log(data[0].lat);
    var latitude = data[0].lat;
    console.log(latitude);
   var longitude = data[0].lon;
   console.log(longitude);
   var fivedayweatherURL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey;
   fetch(fivedayweatherURL)
   .then(function(response){
    return response.json();
}).then (function(data){
    console.log(data);
})
})
})


//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}



//need to use Geocoder API to convert city to exact geographical coordinates

//http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}










