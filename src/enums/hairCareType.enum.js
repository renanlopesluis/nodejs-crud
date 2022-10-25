module.exports = {
	values: { SHORT: 1, LONG: 2 },
	getByCode(code){
		if(code === this.values.SHORT)
			return this.values.SHORT;
		
		if(code === this.values.LONG){
			return this.values.LONG;
		}
	}
}