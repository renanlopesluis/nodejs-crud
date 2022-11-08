const petDto = require('../dto/petDto');
module.exports = {
    map: function(pet){
       return petDto.construct(pet.id, pet.name, pet.age, pet.petType.description);
    }
}