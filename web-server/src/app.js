const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();
const port = process.env.PORT || 3000;

//  Define path for Express config
const publicDirectoryPath = path.join(__dirname, "../public/");
const viewsPath = path.join(__dirname, "../template/views");
const partialsPath = path.join(__dirname, "../template/partials/");

// Set up for handlebar engine and views
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Set up for static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", { title: "Weather", name: "Bahram Movlanov" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About", name: "Bahram Movlanov" });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is helpful text",
    title: "Help",
    name: "Bahram Movlanov",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide a search address",
    });
  }

  geocode(req.query.address, (error, { lat, lon, location } = {}) => {
    if (error) {
      return res.send({ error });
    }

    forecast(lat, lon, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      }

      res.send({
        forecast: forecastData,
        location,
        address: req.query.address,
      });
    });
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }

  console.log(req.query.search);
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Bahram Movlanov",
    errMessage: "Help article not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Bahram Movlanov",
    errMessage: "Page not found",
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
