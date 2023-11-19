//'load' so that after the page loads, we can get our location
window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');  
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = postion.coords.longitude;
            lat = postion.coords.latitude;

            const api = `https://home.openweathermap.org/4433cff4bc90f1d7d5955eae31a1d5b3/${lat},${long}`;

            fetch(api)
            .then(data =>{
                return data.json();
        })
        .then(data =>{
            console.log(data);
            const{temperature, summary} = data.currently;
            // Set dom elements from the api
            temperatureDegree.textContent = temperature;
            temperatureDescription.textContent = summary;

        });
      });
    }
});