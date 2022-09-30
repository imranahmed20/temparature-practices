// console.log('click here')
const API_KEY = `6c84d84e204907c8c355e907e95946e5`
const loadTemparature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
// console.log(url)
fetch(url)
.then(res => res.json())
.then(data => displayTempature(data))


}


const displayTempature = data => {
    // console.log(data)
    setTemparatureById('temperature', data.main.temp)
    setTemparatureById('condition', data.weather[0].main)

}

const setTemparatureById = (id, text) =>{
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById('search-weather').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    document.getElementById('city').innerText = city;
    loadTemparature(city)
})