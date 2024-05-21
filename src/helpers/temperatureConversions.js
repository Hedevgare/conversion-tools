/**
 * Celsius conversions
 */
export function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

export function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

/**
 * Fahrenheit conversions
 */
export function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

export function kelvinToFahrenheit(kelvin) {
    return celsiusToFahrenheit(kelvinToCelsius(kelvin));
}

/**
 * Kelvin conversions
 */
export function celsiusToKelvin(celsius) {
    return parseFloat(celsius) + 273.15;
}

export function fahrenheitToKelvin(fahrenheit) {
    return celsiusToKelvin(fahrenheitToCelsius(fahrenheit));
}