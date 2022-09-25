const searchForm = document.querySelector('.changeLocation');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

//Create a func to update the UI elemnts

const updateUI = (data) => {


    // console.log(data)
    
    // const cityInfos = data.cityInfos;
    // const cityWeather = data.cityWeather;


    // Trying destructure props 

    const {cityInfos, cityWeather} = data ;

    //Update UI template infos
    details.innerHTML = `
        <h3 class="my-3">${cityInfos.EnglishName}</h3>
        <div class="my-3">${cityWeather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${cityWeather.Temperature.Metric.Value}</span>
            <span>&deg;</span>
        </div>
    `;


    //Update the image of dayOrNight and icons
    const iconSrc = `imgs/icons/${cityWeather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);
    icon.setAttribute('alt', cityInfos.EnglishName + ' Weather');
    // console.log(iconSrc)

    // Ternary condition 
    let timeSrc = cityWeather.IsDayTime ? 'imgs/day.svg' : 'imgs/night.svg' ;
    // Add the image to the imgTag
    time.setAttribute('src', timeSrc);


    // Display card if that contains d-none class 

    if(card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    }

}

const updateCity = async (city) => {

    const cityInfos = await getCity(city);
    const cityWeather = await getWeather(cityInfos.Key);

    return {
        cityInfos,
        cityWeather
    };

}

searchForm.addEventListener('submit', e => {
    
    e.preventDefault();

    // get input city value
    const city = searchForm.city.value.trim();
    searchForm.reset();

    //paint city's data in the UI
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err))
   
})


