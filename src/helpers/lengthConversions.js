/**
 * Meters conversions
 */
export function centimetersToMeters(centimeters) {
    return centimeters / 100; 
}

export function kilometersToMeters(kilometers) {
    return kilometers * 1000;
}

export function feetToMeters(feet) {
    return (feet * 0.3048).toFixed(4);
}

/**
 * Centimeters conversions
 */
export function metersToCentimeters(meters) {
    return meters * 100;
}
export function kilometersToCentimeters(kilometers) {
    return metersToCentimeters(kilometersToMeters(kilometers));
}
export function feetToCentimeters(feet) {
    return metersToCentimeters(feetToMeters(feet));
}

/**
 * Kilometers conversions
 */
export function metersToKilometers(meters) {
    return meters / 1000;
}
export function centimetersToKilometers(centimeters) {
    return metersToKilometers(centimetersToMeters(centimeters));
}
export function feetToKilometers(feet) {
    return metersToKilometers(feetToMeters(feet));
}

/**
 * Feet conversions
 */
export function centimetersToFeet(centimeters) {
    return metersToFeet(centimetersToMeters(centimeters));
}
export function metersToFeet(meters) {
    return (meters * 3.2808).toFixed(4);
}
export function kilometersToFeet(kilometers) {
    return metersToFeet(kilometersToMeters(kilometers))
}
