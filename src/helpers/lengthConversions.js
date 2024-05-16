/**
 * Centimeters conversions
 */
export function feetToCentimeters(feet) {
    return metersToCentimeters(feetToMeters(feet));
}

export function kilometersToCentimeters(kilometers) {
    return metersToCentimeters(kilometersToMeters(kilometers));
}

export function metersToCentimeters(meters) {
    return meters * 100;
}

export function millimetersToCentimeters(millimeters) {
    return metersToCentimeters(millimetersToMeters(millimeters));
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

export function millimetersToFeet(millimeters) {
    return metersToFeet(millimetersToMeters(millimeters));
}

export function kilometersToFeet(kilometers) {
    return metersToFeet(kilometersToMeters(kilometers))
}


/**
 * Kilometers conversions
*/
export function centimetersToKilometers(centimeters) {
    return metersToKilometers(centimetersToMeters(centimeters));
}

export function feetToKilometers(feet) {
    return metersToKilometers(feetToMeters(feet));
}

export function metersToKilometers(meters) {
    return meters / 1000;
}

export function millimetersToKilometers(millimeters) {
    return metersToKilometers(millimetersToMeters(millimeters));
}

/**
 * Meters conversions
 */
export function centimetersToMeters(centimeters) {
    return centimeters / 100;
}

export function feetToMeters(feet) {
    return (feet * 0.3048).toFixed(4);
}

export function kilometersToMeters(kilometers) {
    return kilometers * 1000;
}

export function millimetersToMeters(millimeters) {
    return millimeters / 1000;
}

/**
 * Millimeters conversions
 */
export function centimetersToMillimeters(centimeters) {
    return metersToMillimeters(centimetersToMeters(centimeters));
}

export function feetToMillimeters(feet) {
    return metersToMillimeters(feetToMeters(feet));
}

export function kilometersToMillimeters(kilometers) {
    return metersToMillimeters(kilometersToMeters(kilometers));
}

export function metersToMillimeters(meters) {
    return meters * 1000;
}