const express = require('express')
const routes = express.Router()

const multer = require('multer');
const multerConfig = require('./config/multer');


const UserController = require('./controllers/UserController')

const ArquivoController = require('./controllers/ArquivoController')


routes.get('/', (req,res)=>{
  return res.send('eai')
})
routes.get('/users', UserController.index)
routes.post('/userauth', UserController.auth)
routes.get('/users/:user_id', UserController.indexId)
routes.post('/users', UserController.store)
routes.put('/users/:id', UserController.update)


routes.post("/arquivos",multer(multerConfig).single('file'), async (req,res) =>{
  await ArquivoController.store(req,res);
});

routes.get('/arquivos', ArquivoController.index)





module.exports = routes