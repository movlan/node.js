const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const location = process.argv[2];
// console.log(location);

if (location) {
  geocode(location, (err, { lat, lon, location } = {}) => {
    if (err) {
      return console.log(`Err: `, err);
    }
    forecast(lat, lon, (err, forecastData) => {
      if (err) {
        return console.log(`Err: `, err);
      }
      console.log(`Location: `, location);
      console.log(`Forecast: `, forecastData);
    });
  });
} else {
  console.log(`Please provide location name as argument`);
}
