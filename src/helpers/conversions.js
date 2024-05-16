import * as numberConversions from "./numberConversions";
import * as lengthConversions from "./lengthConversions";

export const conversions = {
    // Number Conversions
    "Binary": {
        "Decimal": numberConversions.binaryToDecimal,
        "Hexadecimal": numberConversions.binaryToHexadecimal,
        "Octal": numberConversions.binaryToOctal
    },
    "Decimal": {
        "Binary": numberConversions.decimalToBinary,
        "Hexadecimal": numberConversions.decimalToHexadecimal,
        "Octal": numberConversions.decimalToOctal
    },
    "Hexadecimal": {
        "Binary": numberConversions.hexadecimalToBinary,
        "Decimal": numberConversions.hexadecimalToDecimal,
        "Octal": numberConversions.hexadecimalToOctal
    },
    "Octal": {
        "Binary": numberConversions.octalToBinary,
        "Decimal": numberConversions.octalToDecimal,
        "Hexadecimal": numberConversions.octalToHexadecimal
    },
    // Length Conversions
    "Centimeters": {
        "Feet": lengthConversions.centimetersToFeet,
        "Kilometers": lengthConversions.centimetersToKilometers,
        "Meters": lengthConversions.centimetersToMeters,
        "Millimeters": lengthConversions.centimetersToMillimeters
    },
    "Feet": {
        "Centimeters": lengthConversions.feetToCentimeters,
        "Kilometers": lengthConversions.feetToKilometers,
        "Meters": lengthConversions.feetToMeters,
        "Millimeters": lengthConversions.feetToMillimeters
    },
    "Kilometers": {
        "Centimeters": lengthConversions.kilometersToCentimeters,
        "Feet": lengthConversions.kilometersToFeet,
        "Meters": lengthConversions.kilometersToMeters,
        "Millimeters": lengthConversions.kilometersToMillimeters
    },
    "Meters": {
        "Centimeters": lengthConversions.metersToCentimeters,
        "Feet": lengthConversions.metersToFeet,
        "Kilometers": lengthConversions.metersToKilometers,
        "Millimeters": lengthConversions.metersToMillimeters
    },
    "Millimeters": {
        "Centimeters": lengthConversions.millimetersToCentimeters,
        "Feet": lengthConversions.millimetersToFeet,
        "Kilometers": lengthConversions.millimetersToKilometers,
        "Meters": lengthConversions.millimetersToMeters
    },
}