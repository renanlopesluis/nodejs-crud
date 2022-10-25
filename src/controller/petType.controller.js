module.exports = {
    api: function (srv) {
        const petTypeService = require('../service/movie.service');
        const server = srv; ;

        server.get('/petType', (req, res) => {
            return res.json(petTypeService.list());
        });

    }
}