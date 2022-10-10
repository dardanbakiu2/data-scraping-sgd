

const express = require('express');
const app = express();
const router = require('./router');
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
require('dotenv').config();

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/dir', (req, res) => {
  res.json({direction: `${__dirname}`});
})

app.use('/api', router);

const mongoUrl = "mongodb+srv://sogody_free_cluster:sgd_free_cluster_pw@cluster0.j3vnx3j.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoUrl, {
  useNewUrlParser: true, useUnifiedTopology: true
}, error => {
  if(error) console.log(error)
  else console.log('Connected to mongoDB')
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`App running on port : ${PORT}`))