const petDto = require('../dto/petDto');
module.exports = {
    map: function(pet, petType){
       return petDto.construct(pet.id, pet.name, petType.description);
    }
}