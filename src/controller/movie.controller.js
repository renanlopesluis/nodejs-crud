module.exports = {
    api: function (srv) {
        const movieService = require('../service/movie.service');
        const server = srv; ;

        server.get('/movies', (req, res) => {
            return res.json(movieService.list());
        });

        server.get('/movies/:id', (req, res) => {
            const { id } = req.params;
            return res.json(movieService.get(id));
        });

        server.post('/movies/', (req, res) => {
            const { movie } = req.body;
            return res.json(movieService.post(movie));
        });

        server.put('/movies/:id', (req, res) => {
            const { id } = req.params;
            const { movie } = req.body;
            return res.json(movieService.put(id, movie));
        });

        server.delete('/movies/:id', (req, res) => {
            const { id } = req.params;
            movieService.remove(id);
            return res.json({message: 'Movie successfully removed!'})
        });
    }
}