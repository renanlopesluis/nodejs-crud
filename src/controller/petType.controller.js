
const environment = require('../config/environment');module.exports = {
    api: function (srv) {
        const petTypeService = require('../service/movie.service');
        const server = srv; ;

        server.get(`${environment.baseUrl}/petType`, (req, res) => {
            return res.json(petTypeService.list());
        });

    }
}