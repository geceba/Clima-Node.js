const axios = require('axios');

const getLugarLatLng = async (direccion)=> {

    let encodeUrl = encodeURI( direccion );

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyB6gFAC5T756nRy8vS5iqXp6lH8gAIKujo`)

    console.log(resp.data.results[0].formatted_address);
    if( resp.data.status === 'ZERO_RESULTS' ) {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;


    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}
module.exports = {
    getLugarLatLng
}