const https = require("https");
const url = `https://api.openweathermap.org/data/2.5/weather?lat=45&lon=-75&appid=4ffbf5d0e1185ca74d51e4a5c27dac37&units=imperial`;

const request = https.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data += chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.end();
