module.exports = {
	values: { DRY: 1, WATER: 2, PERFUMEFUL:3, PERFUMELESS:4 },
	getByCode(code){
		console.log(`code: ${code}`);
		console.log(`value: ${this.values.DRY}`);

		if(code == this.values.DRY)
			return this.values.DRY;
		
		if(code == this.values.WATER){
			return this.values.WATER;
		}

		if(code == this.values.PERFUMEFUL)
			return this.values.PERFUMEFUL;
		
		if(code == this.values.PERFUMELESS){
			return this.values.PERFUMELESS;
		}
	}
}