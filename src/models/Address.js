const {Model,  DataTypes} = require('sequelize');

class Address extends Model{
  static init(sequelize){
    super.init({
      zipcode: DataTypes.STRING,
      street: DataTypes.STRING,
      number: DataTypes.STRING,
    },{
      sequelize,
      modelName: 'Address'
    });
  }

  // FAZENDO AS RELACIONAMENTOS ENTRE MINHAS TABELAS.
  static associate(models){
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'});
  }
}

module.exports = Address;