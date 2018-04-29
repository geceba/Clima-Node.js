const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=31769a8eb276f7d0eb830427fd7a4368`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}