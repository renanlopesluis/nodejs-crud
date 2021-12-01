const model = require('../models/movie');
const movies = model.getMovies();

module.exports = {
    list: function(){

        return movies
    },

    get: function(index){
        return movies[index];
    },

    post: function(movie){
        movies.push(movie);
    },
    put: function(index, movie){
        movies[index] = movie;
    }, 

    remove: function(index) {
        movies.splice(index, 1);
    }
}