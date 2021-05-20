const { Model, DataTypes } = require('sequelize');

class User extends Model{
  static init(sequelize){
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    },{
      sequelize, // PASSANDO A INSTÂNCIA DA CONEXÃO COM O BANCO.
      modelName: 'User' // DEFININDO O NOME DO MODELO.
    });
  }

  // FAZENDO AS RELACIONAMENTOS ENTRE MINHAS TABELAS.
  static associate(models){
    this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses'});
    
    this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs' });
    
  }
}

module.exports = User;