'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    // CRIANDO A TABELA DE USUÁRIOS DENTRO DA MIGRATION.
     await queryInterface.createTable('techs', { 
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false,
       },
       name: {
         type: Sequelize.STRING,
         allowNull: false
       },
       created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
       updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
      
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.dropTable('techs');
     
  }
};
