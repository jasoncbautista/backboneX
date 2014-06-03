




/// BackboneX

instead of doing bindAll do:

return function(){
	 // actually should check undefined
	 if (_.exists(this){
	 	return fxn.call(this, arguments);
	} else {
		this = self
		return fxn.call(self, arguments);
	}
};

We need to do this in case the function is meant to be used as an object





