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
    //console.log(data);
    displayCurrentWeather (data);
    updatedate();

})
})


function updatedate() {
var currentDate = dayjs();
var formattedDate = currentDate.format('DD-MM-YYYY');
//console.log(formattedDate);
document.getElementById("todaysdate").innerHTML = formattedDate;
}


//Display current weather for searched location
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
    //console.log(latitude);
   var longitude = data[0].lon;
   //console.log(longitude);
   var fivedayweatherURL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey;
   fetch(fivedayweatherURL)
   .then(function(response){
    return response.json();
}).then (function(data){
    console.log(data);
    displayFiveDay(data);
})
})
})


function displayFiveDay(data) {
var dayOneDate = dayjs();
formattedDate = dayOneDate.format('DD-MM-YYYY');
document.getElementById("dayOne").innerText = formattedDate;
var dayTwoDate = dayOneDate.add(1,"day").format('DD-MM-YYYY');
document.getElementById("dayTwo").innerText = dayTwoDate;
var dayThreeDate = dayOneDate.add(2,"day").format('DD-MM-YYYY');
document.getElementById("dayThree").innerText = dayThreeDate;
var dayFourDate = dayOneDate.add(3,"day").format('DD-MM-YYYY');
document.getElementById("dayFour").innerText = dayFourDate;
var dayFiveDate = dayOneDate.add(4,"day").format('DD-MM-YYYY');
document.getElementById("dayFive").innerText = dayFiveDate;

var dayOneTemp = data.list[0].main.temp;
console.log(dayOneTemp);
document.getElementById("dayOneTemp").innerText = "Temperature: " + dayOneTemp + "° Celsius";

var dayOneTemp = data.list[0].main.temp;
console.log(dayOneTemp)
document.getElementById("dayOneTemp").innerText = "Temperature: " + dayOneTemp + "° Celsius";
// var dayOneWind =
// var dayOneHumidity
// document.getElementById("temperature").innerText = "Temperature: " + temperature + "° Celsius";
// var wind = data.wind.speed;
// document.getElementById("wind").innerText = "Wind: " + wind + " kmph";
// var humidity = data.main.humidity;
// document.getElementById("humidity").innerText = "Humidity: " + humidity + "%";
// }



// for (let i = 0; 1<=5; i++) {
// var dayTwoDate = dayjs().add(i, 'day');
// var formattedDate = nextDay.format('DD-MM-YYYY');
// }
// document.getElementById("day" + i).innerText = formattedDate;

// var dayOneDate = dayjs();
// var formattedDate = dayOneDate.format('DD-MM-YYYY');
//     document.getElementById("dayOne").innerText = formattedDate;

 }





// function displayCurrentWeather (data) {
//     var cityName = data.name;
//     document.getElementById("citymainheader").innerText = cityName;
//     var temperature = data.main.temp;
//     document.getElementById("temperature").innerText = "Temperature: " + temperature + "° Celsius";
//     var wind = data.wind.speed;
//     document.getElementById("wind").innerText = "Wind: " + wind + " kmph";
//     var humidity = data.main.humidity;
//     document.getElementById("humidity").innerText = "Humidity: " + humidity + "%";
//     }
    




