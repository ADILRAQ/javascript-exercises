const convertToCelsius = function(value) {
	// (x - 32) * 5/9
	let	celsius = (value - 32) * 5/9;

	return (Math.floor(celsius * 10) / 10);
};

const convertToFahrenheit = function() {
	// (x × 9/5) + 32
	let	fahrenheit = (value * 9/5) + 32;

	return (Math.floor(fahrenheit * 10) / 10);
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit
};
