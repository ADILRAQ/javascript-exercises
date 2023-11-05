const removeFromArray = function(array, ...args) {
	return (array.filter(elem => {
		for (const e of args)
			if (elem == e)
				return (0);
		return (1);
	}));
};

// Do not edit below this line
module.exports = removeFromArray;
