let button = document.querySelector('.button')
let inputValue = document.querySelector('.inputValue')
let name = document.querySelector('.name')
let desc = document.querySelector('.desc')
let temp = document.querySelector('.temp')
let sumbit = document.getElementById("submitnappi")

sumbit.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=b58808d62e73184f020459f7a9102654')
    .then(Response => Response.json())
    .then(data => {
        let nameValue = data['name'];
        let tempValue = data['main']['temp'];
        let descValue = data['weather'][0]['description'];
        
        name.innerHTML = nameValue;
        temp.innerHTML = tempValue - 273.15 + " °C";
        desc.innerHTML = descValue;
    })
    .catch(err => alert("Wrong city name!"))
})
