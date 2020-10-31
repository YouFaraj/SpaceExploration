const express = require('express');
const app = express();
const PORT = 3000;
const axios = require('axios');
const Path = require('path');
require('dotenv').config()


app.use(express.static(Path.join(__dirname, '../dist')))
//middleware
app.use(express.json());

// send the file bundle with the image of the day.
app.get('/imageoftheday', (req, res) => {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`)
  .then(pictureOfTheDay => res.send(pictureOfTheDay.data))
  .catch(err => console.error('THIS ERROR IS FROM HOME: ', err))
})

// responds to the weather api
app.get('/weather', (req, res) => {
  axios.get(`https://api.nasa.gov/insight_weather/?api_key=${process.env.API_KEY}&feedtype=json&ver=1.0`)
  .then(weatherData => res.send(weatherData.data))
  .catch(err => console.error('THIS ERROR IS FROM WEATHER: ', err))
})

// returns an obj of pics and info
app.get('/rover', (req, res) => {
  axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-6-3&api_key=${process.env.API_KEY}`)
  .then(roverInfo => res.send(roverInfo.data))
  .catch(err => console.error('THIS ERROR IS FROM ROVER: ', err))
})


app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
})

