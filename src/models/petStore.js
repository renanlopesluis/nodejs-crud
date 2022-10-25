const pet = require('./pet');

let petStore = [];

module.exports = {
    add: function(id, name, petType, age){
        petStore.push(pet.construct(id, name, petType, age));
    },
    getAll: function(){
        return petStore;
    }
}