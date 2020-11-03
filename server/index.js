const express = require('express');
const app = express();
const PORT = 3000;
const axios = require('axios');
const Path = require('path');
require('dotenv').config()


app.use(express.static(Path.join(__dirname, '../dist')))
//middleware
app.use(express.json());

// app.get('*', (req,res) =>{
//   res.sendFile(Path.join(__dirname, '../dist/index.html'));
// });

// send the file bundle with the image of the day.
app.get('/api/imageOfTheDay', (req, res) => {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&&date=2020-11-02`)
  .then(pictureOfTheDay => res.send(pictureOfTheDay.data))
  .catch(err => console.error('THIS ERROR IS FROM HOME: ', err))
})

// responds to the weather api
app.get('/api/weather', (req, res) => {
  axios.get(`https://api.nasa.gov/insight_weather/?api_key=${process.env.API_KEY}&feedtype=json&ver=1.0`)
  .then(weatherData => res.send(weatherData.data))
  .catch(err => console.error('THIS ERROR IS FROM WEATHER: ', err))
})

// returns an obj of pics and info
app.get('/api/rover/:name&&:date', (req, res) => {
  const date = req.params.date;
  const name = req.params.name;
  axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${name}/photos?earth_date=${date}&api_key=${process.env.API_KEY}`)
  .then(roverInfo => res.send(roverInfo.data))
  .catch(err => console.error('THIS ERROR IS FROM ROVER: ', err))
})

app.get('/api/random/:search', (req, res) => {
  const term = req.params.search
  axios.get(`https://images-api.nasa.gov/search?q=${term}`)
  .then(randomImages => res.send(randomImages.data.collection.items))
  .catch(err => console.error('THIS ERROR IS FROM RANDOM: ', err))
})


app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
})

