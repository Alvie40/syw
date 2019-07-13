const routesApi = require('express').Router();
routesApi.post('/api/employee/*', require('./employee'));
routesApi.post('/api/customer/*', require('./customer'));
module.exports = routesApi;