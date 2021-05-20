const Sequelize = require('sequelize');
const dbConnecion = require('../config/configDatabase');
const Address = require('../models/Address');
const Tech = require('../models/Tech');
const User = require('../models/User');

// CRIANDO MINHA CONEXÃO COM O BANCO DE DADOS

const connection = new Sequelize(dbConnecion);

// PASSANDO A CONEXÃO PARA O NOSSO MODEL.
User.init(connection);
Address.init(connection);
Tech.init(connection);

Address.associate(connection.models);
User.associate(connection.models);
Tech.associate(connection.models);

// Tech.associate(connection.models);


module.exports = connection;