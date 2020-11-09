const request = require("postman-request");

const geocode = (address, cb) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoibW92bGFuIiwiYSI6ImNraDE3d2dsOTA4bGgyem9rZHcxdDhsNHQifQ.D22MIsvHicvgoSV9lY7gvg&limit=1`;

  request({ url, json: true }, (err, response) => {
    if (err) {
      cb(err, undefined);
    } else if (response.body.features.length === 0) {
      cb(
        `Unable to locate ${response.body.query[0]}. Try another search.`,
        undefined
      );
    } else {
      const data = {
        location: response.body.features[0].place_name,
        lat: response.body.features[0].center[1],
        lon: response.body.features[0].center[0],
      };
      cb(undefined, data);
    }
  });
};

module.exports = geocode;
