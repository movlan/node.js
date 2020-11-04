const request = require("postman-request");

// const weatherUrl =
//     "https://api.openweathermap.org/data/2.5/weather?lat=37.9452&lon=-122.5579&appid=4ffbf5d0e1185ca74d51e4a5c27dac37&units=imperial",
//   mapUrl =
//     "https://api.mapbox.com/geocoding/v5/mapbox.places/los%20angeles.json?access_token=pk.eyJ1IjoibW92bGFuIiwiYSI6ImNraDE3d2dsOTA4bGgyem9rZHcxdDhsNHQifQ.D22MIsvHicvgoSV9lY7gvg&limit=1";

// request({ url: weatherUrl, json: true }, (error, response) => {
//   if (error) {
//     console.log(error);
//   } else if (response.body.cod !== 200) {
//     console.log(response.body.message);
//   } else {
//     const weather = response.body;
//     console.log(
//       // weather
//       `${weather.weather[0].main}. It is currently ${weather.main.temp} degrees out. It feels like ${weather.main.feels_like} degrees out.`
//     );
//   }
// });

// request({ url: mapUrl, json: true }, (err, response) => {
//   if (err) {
//     console.log(`There was an error ${err}`)
//   } else if (response.body) {
//     const mapData = response.body;
//     if (mapData.features.length === 0) {
//       console.log(`Unable to locate ${mapData.query[0]}`);
//     } else {
//       console.log(`lat: ${mapData.features[0].center[1]}, lng: ${mapData.features[0].center[0]}`);
//     }
//   }
// });

// https://api.openweathermap.org/data/2.5/onecall?lat=&lon={lon}&exclude={part}&appid={API key}

const geocode = (address, cb) => {
  const url =
  `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibW92bGFuIiwiYSI6ImNraDE3d2dsOTA4bGgyem9rZHcxdDhsNHQifQ.D22MIsvHicvgoSV9lY7gvg&limit=1`;

  request({ url, json: true }, (err, response) => {
    if (err) {
      cb(err, undefined)
    } else if (response.body.features.length === 0) {
      cb(`Unable to locate ${response.body.query[0]}`, undefined)
    } else {
      cb(undefined, response.body.features[0])
    }
  })
}

geocode("12what", (err, data) => {
  console.log(`Err `, err);
  console.log(`Data `, data);
})