const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const axios = require('axios')
const consola = require('consola')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/weather2', (req, res) => {
  axios.get('http://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1')
  .then(function (response) {
    // handle success
    res.send(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


})
app.get('/weather', (req, res) => {
  res.send(
    [{
      id:1,
      title: "Hello World!",
      description: "Hi there! How are you?"
    }]
  )
})

consola.success('Server is run: 8081')
app.listen(process.env.PORT || 8081)