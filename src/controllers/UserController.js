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
    },
    async auth(req, res){
        const {email, password} = req.body
        const users = await User.findAll()
      
        users.map(user=>{
            if(user.email===email){
                if(user.password===password){
                return res.json({auth: true, message:"Bem vindo!", user})
                }else{
                    return res.json({auth: false, message: "Senha incorreta"})
                }
            }
        })
                return res.json({auth: false, message: "Email não cadastrado"})
            
       
    }
}