
const che = document.getElementById('submitBtn');
che.addEventListener("click", function(){
  const cityName = document.getElementById('inputCity').value;
const fiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='
const  laUrl = '&appid=1fc7e8454eccc37d1aa9821808140dc6';
const allLink  = `${fiUrl}${cityName}${laUrl}`;
fetch(allLink)
.then(response => response.json())
.then(data => {
      if(data.cod === "404"){
          alert('Write the correct city Name , Thank you ');
      }
      else{
        getInfo(data)
      }
} );
})
function getInfo(info){
        const nameCity = info.name;
        const getTemp = info.main;
        let temparature = getTemp.temp;
            temparature = temparature -  273.15 ;
    
        const getDiscrip = info.weather[0];
        const discrip = getDiscrip.main;
        const getIcon = getDiscrip.icon;
        const fimgUrl  = 'https://openweathermap.org/img/wn/';
        const limgUrl  = '@2x.png';
        document.getElementById('show-city').innerText=nameCity;
        document.getElementById('celsius').innerText=temparature.toFixed(1);
        document.getElementById('condition').innerText=discrip;
        document.getElementById('imgs').src=`${fimgUrl}${getIcon}${limgUrl}`;
}