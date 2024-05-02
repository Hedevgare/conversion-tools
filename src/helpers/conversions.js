import * as numberConversions from "./numberConversions";
import * as lengthConversions from "./lengthConversions";

export const conversions = {
    // Number Conversions
    "Binary": {
        "Octal": numberConversions.binaryToOctal,
        "Decimal": numberConversions.binaryToDecimal,
        "Hexadecimal": numberConversions.binaryToHexadecimal
    },
    "Octal": {
        "Binary": numberConversions.octalToBinary,
        "Decimal": numberConversions.octalToDecimal,
        "Hexadecimal": numberConversions.octalToHexadecimal
    },
    "Decimal": {
        "Binary": numberConversions.decimalToBinary,
        "Octal": numberConversions.decimalToOctal,
        "Hexadecimal": numberConversions.decimalToHexadecimal
    },
    "Hexadecimal": {
        "Binary": numberConversions.hexadecimalToBinary,
        "Octal": numberConversions.hexadecimalToOctal,
        "Decimal": numberConversions.hexadecimalToDecimal
    },
    // Length Conversions
    "Centimeters": {
        "Feet": lengthConversions.centimetersToFeet,
        "Meters": lengthConversions.centimetersToMeters,
        "Kilometers": lengthConversions.centimetersToKilometers
    },
    "Meters": {
        "Centimeters": lengthConversions.metersToCentimeters,
        "Feet": lengthConversions.metersToFeet,
        "Kilometers": lengthConversions.metersToKilometers,
    },
    "Kilometers": {
        "Centimeters": lengthConversions.kilometersToCentimeters,
        "Feet": lengthConversions.kilometersToFeet,
        "Meters": lengthConversions.kilometersToMeters
    },
    "Feet": {
        "Centimeters": lengthConversions.feetToCentimeters,
        "Meters": lengthConversions.feetToMeters,
        "Kilometers": lengthConversions.feetToKilometers
    }
}