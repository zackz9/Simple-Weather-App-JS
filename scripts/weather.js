const key = 'VUQnGOr6glZKDh6VtLsrIsxggzNuX7NA';


// Get weather infos from city

const getWeather = async (locationId) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${locationId}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

}

// Get city infos
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

}

// getCity('Paris')
//     .then(data => {
//         return getWeather(data.Key);
//     }).then(data => {
//         console.log(data)
//     })
//     .catch( err => console.log(err));
