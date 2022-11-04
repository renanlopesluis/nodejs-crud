module.exports = {
    api: function (srv) {
        const environment = require('../config/environment');
        const petService = require('../service/pet.service');
        const server = srv; ;

        server.get(`${environment.baseUrl}/pets/`, (req, res) => {
            return res.json(petService.filter(req.query));
        });

        server.get(`${environment.baseUrl}/pets/:id`, (req, res) => {
            const { id } = req.params;
            return res.json(petService.get(id));
        });

        server.post(`${environment.baseUrl}/pets`, (req, res) => {
            const { pet } = req.body;
            return res.json(petService.post(pet));
        });

        server.delete(`${environment.baseUrl}/pets/:id`, (req, res) => {
            const { id } = req.params;
            return res.json(petService.remove(id));
        });

        server.post(`${environment.baseUrl}/pets/bath`, (req, res) => {
            const { petId, serviceCode } = req.body;
            return res.json(petService.doBath(petId, serviceCode));
        });

        server.post(`${environment.baseUrl}/pets/hair`, (req, res) => {
            const { petId, serviceCode } = req.body;
            return res.json(petService.doHairCare(petId, serviceCode));
        });

    }
}