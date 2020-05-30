const express = require('express')
const app = express()
require('dotenv').config()

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.use('/', () => {
  console.log('Posted');
})

app.get('/', (req, res) => {
  res.send('hi')
})



app.listen(3000);
