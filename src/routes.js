const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')


routes.get('/', (req,res)=>{
  return res.send('eai')
})
routes.get('/users', UserController.index)
routes.get('/users/:user_id', UserController.indexId)
routes.post('/users', UserController.store)
routes.put('/users/:id', UserController.update)




module.exports = routes