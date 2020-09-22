const Arquivo = require('../models/Arquivo');

module.exports = {
    async store(req, res) {
        const {key, originalname, size, mimetype, location= ''} = req.file
        const arquivo = await Arquivo.create({ name: originalname, key,size, type:mimetype, url:location,user_id: req.body.user_id,})
        return res.json(arquivo)
    },

    async index(req, res) {
        const arquivos = await Arquivo.findAll()
        return res.json(arquivos)
    },

    
}