
const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather?appid=d5d634bfc8d6a0f294fe08137bafaa6f&units=imperial';
// d5d634bfc8d6a0f294fe08137bafaa6f
const OPEN_WEATHER_BYZIP_URL = 'https://api.openweathermap.org/data/2.5/weather?appid=d5d634bfc8d6a0f294fe08137bafaa6f&units=imperial'
const ZIPCODE_BY_LOCATION_URL = 'https://www.zipcodeapi.com/rest/js-X5XqMobxFpJ5fO0EFAIsMwZfiMTNEWnRJ6loQJYa5fWkiQzPB4wsQqkf680HzsLH/city-zips.json/';
// NtaiaXM2dJNwL4YQ6nWfjxTJFkoOifzuySvwP00sSEzQyI0sUONS7CI7Bcu662iK
// js-X5XqMobxFpJ5fO0EFAIsMwZfiMTNEWnRJ6loQJYa5fWkiQzPB4wsQqkf680HzsLH

module.exports = {
    getTemp: function (cityName, stateName) {
      var requestUrlZipcode;
      console.log('getTemp, stateName: ', stateName);
      var encodedCity = encodeURIComponent(cityName);
      var encodedState = encodeURIComponent(stateName);
      
      var zipRequestURL = `${ZIPCODE_BY_LOCATION_URL}/${encodedCity}/${encodedState}`;
      console.log('zipRequestURL: ', zipRequestURL);
      
      var zipCode = axios.get(zipRequestURL, {
        }).then(function (res) {
        if (res.data.cod && res.data.message) {
            //throw new Error(res.data.message);
            throw new Error('Unable to fetch weather for that location.');
        } else {
            console.log('getTemp res.data.zip_codes: ', res.data.zip_codes);
            return res.data.zip_codes[0];
        }
        }, function (err) {
          //throw new Error(err.response.data.message);
          throw new Error('Unable to fetch weather for that location.');
        });
    
      var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedCity}`;
      console.log('requestUrl: ', requestUrl);
        
      return zipCode.then(data => {
        console.log('---------------------------------> returned zipCode: ', data);
        var encodedZip = encodeURIComponent(data);
        console.log('encodedZip', encodedZip);
        requestUrlZipcode = `${OPEN_WEATHER_BYZIP_URL}&zip=${encodedZip}`;
        console.log('requestUrlZipcode: ', requestUrlZipcode);
        if(data === undefined) {
          console.log('Could not find zipcode.');
          return ' (Could not find zipcode.) '
        } else {
          return axios.get(requestUrlZipcode, {
            }).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                console.log('axios temp: ', res.data.main.temp);
                return res.data.main.temp;
            }
            }, function (res) {
            throw new Error(res.data.message);
            });
        }
      });    
    }
  }
  