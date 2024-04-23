const loc = document.querySelector('.Location')
const desc = document.querySelector('.Desc')
const temp = document.querySelector('.Temp')
const wind =document.querySelector('.Wind')
const humidity=document.querySelector('.Humid')


const search = document.querySelector("#search")
const btn = document.querySelector("#btn")
btn.addEventListener('click', () => { getData(search.value) })
document.querySelector("#formone").addEventListener('submit', (e) => { e.preventDefault() })





async function getData(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a073f2b593e85e528b38b1dac98f69b`)
    const weather = await data.json();
    console.log(weather);
    getDetails(weather)


}

function getDetails(weather){
    loc.innerHTML=`<i class="fa-solid fa-location-dot"></i> ${weather.name}`
    desc.innerHTML=`<i class="fa-solid fa-cloud"></i> ${weather.weather[0].description}`
    const celcius=Math.floor(weather.main.temp-273.15)
    temp.innerHTML=`<i class="fa-solid fa-temperature-three-quarters"></i> ${celcius} <sup>o</sup> C`
    wind.innerHTML=`<i class="fa-solid fa-wind"></i> ${weather.wind.speed} km/hr`
    humidity.innerHTML=`<i class="fa-solid fa-droplet"></i> ${weather.main.humidity} %`
}