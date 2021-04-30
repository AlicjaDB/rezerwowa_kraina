

const btn1=document.getElementById("button");
console.log(btn1);
const pop1=document.querySelector(".popup-content");
console.log(pop1);
function pop_up(){
    pop1.style.display = "flex";
}
btn1.addEventListener("click",pop_up);

document.getElementById("xxx").addEventListener("click",function(){
     document.querySelector(".popup-content").style.display = "flex";
})
document.querySelector(".cancel").addEventListener("click", function(){
    document.querySelector(".popup-content").style.display="none";
});



///// data i godzina 
function getTime() 
{
    return (new Date()).toLocaleTimeString();
}

document.getElementById('time_now').innerHTML = getTime();

setInterval(function() {

    document.getElementById('time_now').innerHTML = getTime();
    
}, 1000);

const currentDate = new Date();
const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
const day = currentDate.getDate();
const year = currentDate.getFullYear();
const fullDate = (day  + "." + month  + "." + year);
document.getElementById("date_now").innerHTML =fullDate;


// const months = ["January" , "February", "March" , "April", "May", "June", "July", "August", "September", "November", "October", "November", "December"];
// const week  = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//// pogoda ///////

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
///// data z kalendarza ////

///// wyswietlanie formularza ////



let selection = document.getElementById('select1');
let result = document.getElementById('result-name');

selection.addEventListener('change', () => {
    result.innerText = selection.options[selection.selectedIndex].value;
    console.log(selection.selectedIndex);
});

let selection1 = document.getElementById('select2');
let result1 = document.getElementById('result-name1');

selection1.addEventListener('change', () => {
    result1.innerText = selection1.options[selection1.selectedIndex].value;
    console.log(selection1.selectedIndex);
});
let selection2 = document.getElementById('select3');
let result2 = document.getElementById('ilosc-pasazerow');

selection2.addEventListener('change', () => {
    result2.innerText = selection2.options[selection2.selectedIndex].value;
    console.log(selection2.selectedIndex);
});

/// data input /////

let arriv=document.getElementById("arrivaldate");
let result3=document.getElementById("result-przylotu");

arriv.addEventListener('change', updateValue );

function updateValue(e){
    result3.textContent=e.target.value;
};

let dept=document.getElementById("departuredate");
let result4=document.getElementById("result-powrotu");

dept.addEventListener('change', updateValue1 );

function updateValue1(e){
    result4.textContent=e.target.value;
};








