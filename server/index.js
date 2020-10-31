const express = require('express');
const app = express();
const PORT = 3000;
const axios = require('axios');
require('dotenv').config()



//middleware
app.use(express.json());

// send the file bundle with the image of the day.
app.get('/', async (req, res) => {
  try {
    const pictureOfTheDay = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`)
    if(pictureOfTheDay) {
      res.send(pictureOfTheDay.data)
    } else {
      res.send('Failed requesting the picture')
    }
  } catch (err) {
    console.error('THIS ERROR IS FROM HOME: ', err)
  }
})

// responds to the weather api
app.get('/weather', async (req, res) => {
  try {
    const weather = await axios.get(`https://api.nasa.gov/insight_weather/?api_key=${process.env.API_KEY}&feedtype=json&ver=1.0`)
    if(weather) {
     res.send(Object.keys(weather.data))
    } else {
      res.send('Failed requesting the weather')
    }
  } catch (err) {
    console.error('THIS ERROR IS FROM WEATHER: ', err)
  }
})

// returns an obj of pics and info
app.get('/rover', async (req, res) => {
  try {
    const roverPics = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-6-3&api_key=${process.env.API_KEY}`)
    if(roverPics) {
     res.send(roverPics.data)
    } else {
      res.send('Failed requesting the mars rover info')
    }
  } catch (err) {
    console.error('THIS ERROR IS FROM ROVER: ', err)
  }
})


app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
})

