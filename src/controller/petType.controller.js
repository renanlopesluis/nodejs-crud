
const environment = require('../config/environment');module.exports = {
    api: function (srv) {
        const petTypeService = require('../service/petType.service');
        const server = srv; ;

        server.get(`${environment.baseUrl}/petType/`, (req, res) => {
            return res.json(petTypeService.list());
        });

    }
}