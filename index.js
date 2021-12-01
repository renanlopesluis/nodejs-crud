const serverConfig = require('./src/config/server');
const movieController = require('./src/controller/movie.controller');


const server = serverConfig.init();

movieController.api(server);