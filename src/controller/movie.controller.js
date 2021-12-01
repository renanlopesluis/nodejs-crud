module.exports = {
    api: function (srv) {
        const movieService = require('../service/movie.service');

        const server = srv; 

        server.get('/movies', (req, res) => {
            const { index } = req.params;
            return res.json(movieService.list());
        });

        server.get('/movies/:index', (req, res) => {
            const { index } = req.params;
            return res.json(movieService.get(index));
        });


        server.post('/movies/', (req, res) => {
            const { movie } = req.body;
            return res.json(movieService.post(movie));
        });

        server.put('/movies/:index', (req, res) => {
            const { index } = req.params;
            const { movie } = req.body;
            return res.json(movieService.put(index, movie));
        });

        server.delete('/movies/:index', (req, res) => {
            const { index } = req.params;
            movieService.remove(index);
            return res.json({message: 'Movie successfully removed!'})
        });
    }
}