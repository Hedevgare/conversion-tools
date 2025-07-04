/**
 * Centimeters conversions
 */
export function feetToCentimeters(feet) {
    return metersToCentimeters(feetToMeters(feet));
}

export function inchesToCentimeters(inches) {
    return feetToCentimeters(inchesToFeet(inches));
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

export function milesToCentimeters(miles) {
    return feetToCentimeters(milesToFeet(miles));
}

export function yardsToCentimeters(yards) {
    return metersToCentimeters(yardsToMeters(yards));
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
    return meters / 0.3048;
}

export function millimetersToFeet(millimeters) {
    return metersToFeet(millimetersToMeters(millimeters));
}

export function milesToFeet(miles) {
    return miles * 5280;
}

export function yardsToFeet(yards) {
    return yards * 3;
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

export function milesToInches(miles) {
    return feetToInches(milesToFeet(miles));
}

export function yardsToInches(yards) {
    return yards * 36;
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
    return feetToKilometers(inchesToFeet(inches));
}

export function metersToKilometers(meters) {
    return meters / 1000;
}

export function millimetersToKilometers(millimeters) {
    return metersToKilometers(millimetersToMeters(millimeters));
}

export function milesToKilometers(miles) {
    return feetToKilometers(milesToFeet(miles));
}

export function yardsToKilometers(yards) {
    return metersToKilometers(yardsToMeters(yards));
}

/**
 * Meters conversions
 */
export function centimetersToMeters(centimeters) {
    return centimeters / 100;
}

export function feetToMeters(feet) {
    return feet * 0.3048;
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

export function milesToMeters(miles) {
    return feetToMeters(milesToFeet(miles));
}

export function yardsToMeters(yards) {
    return yards * 0.9144;
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

export function milesToMillimeters(miles) {
    return feetToMillimeters(milesToFeet(miles));
}

export function yardsToMillimeters(yards) {
    return metersToMillimeters(yardsToMeters(yards));
}

/**
 * Miles conversions
 */
export function centimetersToMiles(centimeters) {
    return kilometersToMiles(centimetersToKilometers(centimeters));
}

export function feetToMiles(feet) {
    return kilometersToMiles(feetToKilometers(feet));
}

export function inchesToMiles(inches) {
    return kilometersToMiles(inchesToKilometers(inches));
}

export function kilometersToMiles(kilometers) {
    return kilometers / 1.609344;
}

export function metersToMiles(meters) {
    return kilometersToMiles(metersToKilometers(meters));
}

export function millimetersToMiles(millimeters) {
    return kilometersToMiles(millimetersToKilometers(millimeters));
}

export function yardsToMiles(yards) {
    return yards / 1760;
}

/**
 * Yards conversions
 */
export function metersToYards(meters) {
    return meters / 0.9144;
}

export function centimetersToYards(centimeters) {
    return metersToYards(centimetersToMeters(centimeters));
}

export function feetToYards(feet) {
    return feet / 3;
}

export function inchesToYards(inches) {
    return inches / 36;
}

export function kilometersToYards(kilometers) {
    return metersToYards(kilometersToMeters(kilometers));
}

export function millimetersToYards(millimeters) {
    return metersToYards(millimetersToMeters(millimeters));
}

export function milesToYards(miles) {
    return miles * 1760;
}