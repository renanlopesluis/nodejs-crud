const petTypeStore = require('../models/petTypeStore');

petTypeStore.add(1, 'Dog');
petTypeStore.add(2, 'Cat');
petTypeStore.add(3, 'Hamster');

module.exports = {
    list: function(){
        return petTypeStore.getAll();
    }
}