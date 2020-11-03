const request = require("postman-request");

const weatherUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=37.9452&lon=-122.5579&appid=4ffbf5d0e1185ca74d51e4a5c27dac37&units=imperial",
  mapUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibW92bGFuIiwiYSI6ImNraDE3d2dsOTA4bGgyem9rZHcxdDhsNHQifQ.D22MIsvHicvgoSV9lY7gvg&limit=1";

request({ url: weatherUrl, json: true }, (error, response) => {
  if (error) {
    console.log(error);
  } else if (response.body.cod !== 200) {
    console.log(response.body.message);
  } else {
    const weather = response.body;
    console.log(
      // weather
      `${weather.weather[0].main}. It is currently ${weather.main.temp} degrees out. It feels like ${weather.main.feels_like} degrees out.`
    );
  }
});

// request({ url: mapUrl, json: true }, (err, response) => {
//   const mapData = response.body.features[0];
//   console.log(`lat: ${mapData.center[1]}, lng: ${mapData.center[0]}`);
// });

// https://api.openweathermap.org/data/2.5/onecall?lat=&lon={lon}&exclude={part}&appid={API key}
