/**
 * Centimeters conversions
 */
export function feetToCentimeters(feet) {
    return metersToCentimeters(feetToMeters(feet));
}

export function inchesToCentimeters(inches) {
    feetToCentimeters(inchesToFeet(inches));
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

export function inchesToFeet(inches) {
    return inches / 12;
}

export function kilometersToFeet(kilometers) {
    return metersToFeet(kilometersToMeters(kilometers))
}

export function metersToFeet(meters) {
    return (meters * 3.2808).toFixed(4);
}

export function millimetersToFeet(millimeters) {
    return metersToFeet(millimetersToMeters(millimeters));
}

/**
 * Inches conversions
 */
export function centimetersToInches(centimeters) {
    return feetToInches(centimetersToFeet(centimeters));
}

export function feetToInches(feet) {
    return feet * 12;
}

export function kilometersToInches(kilometers) {
    return feetToInches(kilometersToFeet(kilometers));
}

export function metersToInches(meters) {
    return feetToInches(metersToFeet(meters));
}

export function millimetersToInches(millimeters) {
    return feetToInches(millimetersToFeet(millimeters));
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

export function inchesToKilometers(inches) {
    feetToKilometers(inchesToFeet(inches));
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

export function inchesToMeters(inches) {
    return feetToMeters(inchesToFeet(inches));
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

export function inchesToMillimeters(inches) {
    return feetToMillimeters(inchesToFeet(inches));
}

export function kilometersToMillimeters(kilometers) {
    return metersToMillimeters(kilometersToMeters(kilometers));
}

export function metersToMillimeters(meters) {
    return meters * 1000;
}