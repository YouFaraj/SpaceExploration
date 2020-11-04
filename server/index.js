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


// sends 5 random images to the home page
app.get('/api/homeImages', async (req, res) => {
  var image1 = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&&date=2020-${Math.floor(Math.random() * 9) + 1}-${Math.floor(Math.random() * 25) + 1}`)
  .catch(err => console.error('THIS ERROR IS FROM HOME: ', err))
  var image2 = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&&date=2020-${Math.floor(Math.random() * 9) + 1}-${Math.floor(Math.random() * 25) + 1}`)
  .catch(err => console.error('THIS ERROR IS FROM HOME: ', err))
  var image3 = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&&date=2020-${Math.floor(Math.random() * 9) + 1}-${Math.floor(Math.random() * 25) + 1}`)
  .catch(err => console.error('THIS ERROR IS FROM HOME: ', err))
  var image4 = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&&date=2020-${Math.floor(Math.random() * 9) + 1}-${Math.floor(Math.random() * 25) + 1}`)
  .catch(err => console.error('THIS ERROR IS FROM HOME: ', err))
  var image5 = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&&date=2020-${Math.floor(Math.random() * 9) + 1}-${Math.floor(Math.random() * 25) + 1}`)
  .catch(err => console.error('THIS ERROR IS FROM HOME: ', err))
  res.send({image1: { id: 0, url: image1.data}, image2: { id: 1, url: image2.data}, image3: { id: 2, url: image3.data}, image4: { id: 3, url: image4.data}, image5: { id: 4, url: image5.data}})
})

// send the file bundle with the image of the day.
app.get('/api/imageOfTheDay', (req, res) => {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&&date=2020-11-04`)
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

