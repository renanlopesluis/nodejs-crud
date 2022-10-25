const BathTypeEnum = require('../enums/bathType.enum');
const DryBathService = require('../service/dryBath.service');
const WaterBathService = require('../service/waterBath.service');
const PerfumefulBathService = require('../service/perfumefulBath.service');
const PerfumelessBathService = require('../service/perfumelessBath.service');

module.exports = {
    getInstance(bathTypeEnum){
        if(bathTypeEnum === BathTypeEnum.values.DRY)
            return DryBathService;

        if(bathTypeEnum === BathTypeEnum.values.WATER)
            return WaterBathService;

        if(bathTypeEnum === BathTypeEnum.values.PERFUMEFUL)
            return PerfumefulBathService;

        if(bathTypeEnum === BathTypeEnum.values.PERFUMELESS)
            return PerfumelessBathService;
    }
}