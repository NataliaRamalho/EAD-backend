
require('dotenv').config();


const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')
const morgan = require('morgan')

require('./database')


app.use(cors({
  origin: [process.env.REACT_APP_API_URL, "https://ead-educanauta-frontend.herokuapp.com" ],
  methods: 'GET, HEAD, PATCH, POST, PUT, DELETE, OPTIONS'
}));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, PUT, DELETE');
  next();
});


app.use(express.json())



app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))




app.use(routes)
app.listen(process.env.PORT || 3001)
