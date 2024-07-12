/**
 * Celsius conversions
 */
export function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

export function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

export function rankineToCelsius(rankine) {
    return (rankine - 491.67) * 5 / 9;
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

export function rankineToFahrenheit(rankine) {
    return rankine - 459.67;
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

export function rankineToKelvin(rankine) {
    return rankine * 5 / 9;
}

/**
 * Rankine conversions
 */
export function celsiusToRankine(celsius) {
    return celsius * 9 / 5 + 491.67;
}

export function fahrenheitToRankine(fahrenheit) {
    return Number(fahrenheit) + 459.67;
}

export function kelvinToRankine(kelvin) {
    return kelvin * 9 / 5;
}