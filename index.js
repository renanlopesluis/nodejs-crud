const serverConfig = require('./src/config/server');
const petController = require('./src/controller/pet.controller');


const server = serverConfig.init();

petController.api(server);