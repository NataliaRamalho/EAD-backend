const { Model, DataTypes } = require('sequelize')

class Arquivo extends Model {
    static init(sequelize) {
        super.init({
           name: DataTypes.STRING,
           size: DataTypes.STRING,
           type: DataTypes.STRING,
           url: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'arquivos'
        })
        
    }
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'})
       
    }
}

module.exports = Arquivo