import BasicService from './basic.service';

class BathService extends BasicService{
    execute(pet);
    isClass(service){
        return service instanceof BathService;
    }
}

export default new BathService();