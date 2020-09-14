const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../models/User')
const Arquivo = require('../models/Arquivo')
const connection = new Sequelize(dbConfig)

User.init(connection)
Arquivo.init(connection)
User.associate(connection.models)
Arquivo.associate(connection.models)

module.exports = connection