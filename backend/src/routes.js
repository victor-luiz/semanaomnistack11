const express = require('express');

const OngController = require('./conttrolers/OngController');
const IncidentController = require('./conttrolers/IncidentController');
const ProfileController = require('./conttrolers/ProfileController');
const SessionController = require('./conttrolers/SessionController');

const routes = express.Router(); 

/**
 * Rotas  / Recurso
 */

/**
  * Métodos HTTP:
  * 
  * GET: Bucar uma informação do back-end
  * POST: Criar uma informação do back-end
  * PUT: Alterar uma informação do back-end
  * DELETE: deletar uma informação do back-end
  */

/**
 * Tipo de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Body Params: 
 */

/**
 * SQL: MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * : table('users').select(*)
 */

routes.post('/sessions', SessionController.create);

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;