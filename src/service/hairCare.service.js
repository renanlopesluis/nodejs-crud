import BasicService from './basic.service';

class HairCareService extends BasicService{
    execute(pet);
    isClass(service){
        return service instanceof HairCareService;
    }
}

export default new HairCareService();