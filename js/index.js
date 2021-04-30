///// Pogoda /////

let button8 = document.querySelector('.submit8');
let pogoda = document.querySelector('.pogoda');
let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let temp= document.querySelector('.temp');
let tempvalue=document.getElementById("temp-value");
let icon =document.getElementById('icon');
 
button8.addEventListener('click', function(){

fetch('https://api.openweathermap.org/data/2.5/weather?q='+pogoda.value+'&appid=20c5e6a815d03428798c0eef34f7402d')


.then(response => response.json())
.then(data => {
const nameValue = data['name'];
const tempValue = data['main']['temp'];
const descValue = data['weather'][0]['description'];
const iconUrl =`http://openweathermap.org/img/w/${data.weather[0].icon}.png` 
icon.setAttribute('src', iconUrl);
name.innerHTML =nameValue;
desc.innerHTML = descValue;
tempvalue.innerHTML=Math.round(tempValue-273);
})
    
.catch(err => alert("Wrong city name!"));
});

/////// Szczegoły lotu //////
//// samolot/////









