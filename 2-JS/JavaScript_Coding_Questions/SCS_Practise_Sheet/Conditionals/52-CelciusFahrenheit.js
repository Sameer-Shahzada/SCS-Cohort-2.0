//-> 52. Convert Celsius to Fahrenheit using a function.

/**
 * Converts a temperature from Celsius to Fahrenheit.
 * @param {number} celsius - The temperature in Celsius.
 * @returns {number} The temperature in Fahrenheit.
 */

 //-> The formula for conversion is (Celsius * 9/5) + 32

function convertCelsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32
    return fahrenheit;
}
console.log(convertCelsiusToFahrenheit(52))