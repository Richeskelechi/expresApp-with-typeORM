const express = require('express');
const serverRouter = express.Router();

const serverHealthController = require('../controllers/serverController');

serverRouter.get('/', serverHealthController.getServerHealth)
serverRouter.get('/test', serverHealthController.getTestData)

module.exports = serverRouter