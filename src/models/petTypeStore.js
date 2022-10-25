const petType = require('./petType');

let petTypeStore = [];

module.exports = {
    add: function(id, description){
        petTypeStore.push(petType.construct(id, description));
    },
    getAll: function(){
        return petTypeStore;
    }
}