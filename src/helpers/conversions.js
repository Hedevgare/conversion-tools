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
        "Inches": lengthConversions.centimetersToInches,
        "Kilometers": lengthConversions.centimetersToKilometers,
        "Meters": lengthConversions.centimetersToMeters,
        "Millimeters": lengthConversions.centimetersToMillimeters
    },
    "Feet": {
        "Centimeters": lengthConversions.feetToCentimeters,
        "Inches": lengthConversions.feetToInches,
        "Kilometers": lengthConversions.feetToKilometers,
        "Meters": lengthConversions.feetToMeters,
        "Millimeters": lengthConversions.feetToMillimeters
    },
    "Inches": {
        "Centimeters": lengthConversions.inchesToCentimeters,
        "Feet": lengthConversions.inchesToFeet,
        "Kilometers": lengthConversions.inchesToKilometers,
        "Meters": lengthConversions.inchesToMeters,
        "Millimeters": lengthConversions.inchesToMillimeters
    },
    "Kilometers": {
        "Centimeters": lengthConversions.kilometersToCentimeters,
        "Feet": lengthConversions.kilometersToFeet,
        "Inches": lengthConversions.kilometersToInches,
        "Meters": lengthConversions.kilometersToMeters,
        "Millimeters": lengthConversions.kilometersToMillimeters
    },
    "Meters": {
        "Centimeters": lengthConversions.metersToCentimeters,
        "Feet": lengthConversions.metersToFeet,
        "Inches": lengthConversions.metersToInches,
        "Kilometers": lengthConversions.metersToKilometers,
        "Millimeters": lengthConversions.metersToMillimeters
    },
    "Millimeters": {
        "Centimeters": lengthConversions.millimetersToCentimeters,
        "Feet": lengthConversions.millimetersToFeet,
        "Inches": lengthConversions.millimetersToInches,
        "Kilometers": lengthConversions.millimetersToKilometers,
        "Meters": lengthConversions.millimetersToMeters
    },
}