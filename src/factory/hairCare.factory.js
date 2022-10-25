const HairCareTypeEnum = require('../enums/hairCareType.enum');
const ShortHairCareService = require('../service/shortHairCare.service');
const LongHairCareService = require('../service/longHairCare.service');

module.exports = {
    getInstance(hairCareTypeEnum){
        if(hairCareTypeEnum === HairCareTypeEnum.values.SHORT)
            return ShortHairCareService;
 
        if(hairCareTypeEnum === HairCareTypeEnum.values.LONG)
            return LongHairCareService;

    }
}