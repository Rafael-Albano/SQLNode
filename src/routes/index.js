const express = require('express');
const AddressController = require('../controllers/AddressController');
const ReportController = require('../controllers/ReportController');
const TechController = require('../controllers/TechController');
const UserController = require('../controllers/UserController');



// Variável usada para trabalhar com rotas no express.
const routes = express.Router()

// Criando as rotas.
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);


routes.get('/users/:id/address', AddressController.index);
routes.post('/users/:id/address', AddressController.store);


routes.get('/users/:id/techs', TechController.index);
routes.post('/users/:id/techs', TechController.store);
routes.delete('/users/:id/techs', TechController.delete);

routes.get('/report', ReportController.show);
module.exports = routes;