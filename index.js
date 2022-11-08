const serverConfig = require('./src/config/server');
const petController = require('./src/controller/pet.controller');
const petTypeController = require('./src/controller/petType.controller');

const server = serverConfig.init();

petController.api(server);
petTypeController.api(server);