
require('dotenv').config();


const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')
const morgan = require('morgan')

require('./database')

app.use(cors({
  origin: process.env.REACT_APP_API_URL,
  methods: 'GET, OPTIONS, POST, PUT, DELETE',
  credentials: true,
  allowedHeaders: 'X-Requested-With,content-type'
}));


app.use(express.json())



app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))




app.use(routes)
app.listen(process.env.PORT || 3001)
