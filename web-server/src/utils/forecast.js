const request = require("postman-request");

const forecast = (lat, lon, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4ffbf5d0e1185ca74d51e4a5c27dac37&units=imperial`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback(`There was an ${error}`, undefined);
    } else if (body.cod !== 200) {
      const returnError = `Error code: ${body.cod}.\nError message: ${body.message}`;
      callback(returnError, undefined);
    } else {
      const data = body;
      console.log(data);
      const message = `${data.weather[0].main}. It is currently ${data.main.temp} degrees out. It feels like ${data.main.feels_like} degrees out.`;
      callback(undefined, message);
    }
  });
};

module.exports = forecast;
