const movieStore = require('../models/movieStore');

movieStore.add(1, 'Fight Club', 1999);
movieStore.add(2, 'American Beauty', 1999);
movieStore.add(3, 'Matrix', 1999);

let movies = movieStore.getMovies();

module.exports = {
    list: function(){
        return movies;
    },
    get: function(id){
        return movies.filter((movie) => movie.id == id);
    },
    post: function(movie){
        movies.push(movie);
    },
    put: function(id, movie){
        m = movies.filter((mv) => mv.id == id);
        m = movie;
        movies = movies.filter((mv) => mv.id !== id);
        movies.push(m);
    }, 
    remove: function(id) {
        movies = movies.filter((movie) => movie.id !== id);
    }
}