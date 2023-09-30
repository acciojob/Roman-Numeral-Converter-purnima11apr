// This file is not to be modified. Please ignore this.
// We will understand all of this later in the course.
// DO NOT MODIFY THIS FILE

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const convertToRoman = require('./script');

app.use(express.static(__dirname))

app.post('/romanConverter',(req, res) => {
  const input = req.body.input
  const answer = convertToRoman(input) 
  res.send({roman:answer})
})

module.exports = app;
