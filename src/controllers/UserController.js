const User = require('../models/User')

module.exports = {
    async index(req, res) {
        const users = await User.findAll()

        return res.json(users)
    },
    async indexId(req, res){
        const { user_id } = req.params

        const user = await User.findByPk(user_id)
        return res.json(user)
    },

    async store(req, res) {
        const { name, email, password } = req.body

        const user = await User.create({ name, email, password })

        return res.json(user)
    },
    async update(req, res){
        const { id } = req.params
        const { password} = req.body
        const user = User.update({ password }, {where: { id: id}})
        return res.json(user)
    }
}