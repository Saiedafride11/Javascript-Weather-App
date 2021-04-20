var inputValue = document.querySelector('.input-value');
var button = document.querySelector('.Submit')
var cityName = document.querySelector('.city-name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');



button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=21f2bd44a4b1b7199c603b94301169a6')
    .then(response => response.json())
    .then(data => {
        // var nameValue = data['name'];
        // var tempValue = data['main']['temp'];
        // var descValue = data['weather'][0]['description'];

        var nameValue = data.name;
        var temVal = data.main.temp;
        var tempValue = temVal -  273.15;
        var descValue = data.weather[0].description;

        cityName.innerHTML = nameValue;
        temp.innerHTML = tempValue.toFixed(0);
        desc.innerHTML = descValue;

        // console.log(data)
    })
    
    .catch(err => alert("Wrong city name!"))
})







// api.openweathermap.org/data/2.5/weather?q=+inputValue.value+&appid={API key}