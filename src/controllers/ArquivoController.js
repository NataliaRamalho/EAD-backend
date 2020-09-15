const Arquivo = require('../models/Arquivo');

module.exports = {
    async store(req, res) {
        const { originalname, size, mimetype, path, location= ''} = req.file
       
        const user = await Arquivo.create({ name: originalname, key,size, type:mimetype, url:location,user_id:'1',})

        return res.json(user)
    },

    async index(req, res) {
        const arquivos = await Arquivo.findAll()
        return res.json(arquivos)
    },

    
}