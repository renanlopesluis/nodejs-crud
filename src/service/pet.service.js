const bathFactory = require('../factory/bath.factory');
const hairCareFactory = require('../factory/hairCare.factory');
const HairCareTypeEnum = require('../enums/hairCareType.enum');
const BathTypeEnum = require('../enums/bathType.enum');
const petMapper = require('../mapper/petMapper');
const petStore = require('../models/petStore');

petStore.add(1, 'Alvin', {id: 1, description: "Dog"}, 4);
petStore.add(2, 'Tom', {id: 2, description: "Cat"}, 7);
petStore.add(3, 'Jerry', {id: 3, description: "Hamster"}, 5);

let pets = petStore.getAll();

module.exports = {
    filter: function(query){
        if(Object.keys(query).length === 0){ 
            return this.list();
        }
        return this.getByName(query.name);
    },
    list: function(){
        let petsDto = [];
        pets.forEach(function(pet, i) {  
            petsDto.push(petMapper.map(pet, pet.petType))
        })
        return petsDto;
    },
    get: function(id){
        return pets.filter((pet) => pet.id == id);
    },
    getByName: function(name){
        return pets.filter((pet) => pet.name.includes(name));
    },
    post: function(pet){
        pets.push(pet);
        return pets;
    },
    remove: function(id) {
        pets = pets.filter((pet) => pet.id != id);
        return pets;
    },
    doBath: function(petId, serviceCode){
        const pet = this.get(petId);
        const bathTypeEnum = BathTypeEnum.getByCode(serviceCode);
        return bathFactory.getInstance(bathTypeEnum).execute(pet);
    },
    doHairCare: function(petId, serviceCode){
        const pet = this.get(petId);
        const hairCareTypeEnum= HairCareTypeEnum.getByCode(serviceCode);
        return hairCareFactory.getInstance(hairCareTypeEnum).execute(pet);
    }
}