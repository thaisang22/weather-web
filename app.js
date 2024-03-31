var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var value = document.querySelector('.value');
var time = document.querySelector('.time');
var shortDesc = document.querySelector('.short-desc');
var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.wind span');
var sun = document.querySelector('.sun span');
var content = document.querySelector('.content');
var body = document.body; // Selecting the body element itself

async function ChangeWeatherUI(capitalsearch) {
    var apiKey = '5847511c2885d2ccfa037e51c9aaafcb';
    var apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + capitalsearch + '&appid=' + apiKey;

        let response = await fetch(apiURL);
        let data = await response.json();
        
        if (data.cod === 200) {
            content.classList.remove('hide'); // Show the content
            content.classList.add('remove');
            city.innerHTML = data.name;
            country.innerHTML = data.sys.country;
            visibility.innerHTML = data.visibility + 'm';
            wind.innerHTML = data.wind.speed + 'm/s';
            sun.innerHTML = data.main.humidity + '%';
            var temperature = Math.round(data.main.temp - 273.15);
            value.innerHTML = temperature;
            shortDesc.innerHTML = data.weather[0] ? data.weather[0].main : "";
            time.innerHTML = new Date().toLocaleString('vi');
        
            if (temperature <= 35) {
                body.setAttribute('class', 'hot');
            }  if (temperature <= 27) {
                body.setAttribute('class', 'warm');
            }  if (temperature < 25) {
                body.setAttribute('class', 'cold');
            }
        } else {
            content.classList.add('hide'); // Hide the content
        }   
}
search.addEventListener('keypress', function(e){    
    if (e.code === 'Enter') {
        let capitaSearch = search.value.trim();
        ChangeWeatherUI(capitaSearch);
    }
});
ChangeWeatherUI('Ha Noi');
