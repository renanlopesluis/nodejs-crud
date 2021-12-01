const movie = require('./movie');

let movieStore = [];

module.exports = {
    add: function(id, name, year){
        movieStore.push(movie.construct(id, name, year));
    },
    getMovies: function(){
        return movieStore;
    }
}