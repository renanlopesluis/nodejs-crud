module.exports = {
    api: function (srv) {
        const petService = require('../service/pet.service');
        const server = srv; ;

        server.get('/pets/', (req, res) => {
            return res.json(petService.filter(req.query));
        });

        server.get('/pets/:id', (req, res) => {
            const { id } = req.params;
            return res.json(petService.get(id));
        });

        server.post('/pets', (req, res) => {
            const { pet } = req.body;
            return res.json(petService.post(pet));
        });

        server.delete('/pets/:id', (req, res) => {
            const { id } = req.params;
            return res.json(petService.remove(id));
        });

        server.post('/pets/bath', (req, res) => {
            const { petId, serviceCode } = req.body;
            return res.json(petService.doBath(petId, serviceCode));
        });

        server.post('/pets/hair', (req, res) => {
            const { petId, serviceCode } = req.body;
            return res.json(petService.doHairCare(petId, serviceCode));
        });

    }
}