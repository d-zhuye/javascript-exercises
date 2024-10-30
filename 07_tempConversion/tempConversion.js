const convertToCelsius = function(fahrenheit) {
  /*
  To convert Fahrenheit to Celsius:

  1. Subtract 32 from the Fahrenheit temperature.
  2./ Multiply the result by 5.
  3. Then, divide by 9.
  */

  let celsius = (fahrenheit - 32) * (5/9);
  celsius = celsius.toFixed(1);
  return Number(celsius);
  
};

const convertToFahrenheit = function(celsius) {
  /*
  To convert Celsius to Fahrenheit:

  1. Multiply the Celsius temperature by 9.
  2. Then, divide by 5.
  3. Finally, add 32 to the result.
  */

  let fahrenheit = (9 / 5) * celsius + 32;
  fahrenheit = fahrenheit.toFixed(1);
  return Number(fahrenheit);
};

convertToFahrenheit(53);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
