'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    // CRIANDO A TABELA DE ENDEREÇOS DENTRO DA MIGRATION.
     await queryInterface.createTable('addresses', { 
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false,
       },
       zipcode: {
         type: Sequelize.STRING,
         allowNull: true
       },
       street: {
         type: Sequelize.STRING,
         allowNull: false
       },
       number: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
       created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
       updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

      // CRIANDO FOREIGN KEY DENTRO DA MINHA TABELA.
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.dropTable('addresses');
     
  }
};
