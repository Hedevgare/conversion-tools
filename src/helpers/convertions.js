import * as numberConvertions from "./numberConvertions";
import * as lengthConvertions from "./lengthConvertions";

export const convertions = {
    // Number Convertions
    "Binary": {
        "Octal": numberConvertions.binaryToOctal,
        "Decimal": numberConvertions.binaryToDecimal,
        "Hexadecimal": numberConvertions.binaryToHexadecimal
    },
    "Octal": {
        "Binary": numberConvertions.octalToBinary,
        "Decimal": numberConvertions.octalToDecimal,
        "Hexadecimal": numberConvertions.octalToHexadecimal
    },
    "Decimal": {
        "Binary": numberConvertions.decimalToBinary,
        "Octal": numberConvertions.decimalToOctal,
        "Hexadecimal": numberConvertions.decimalToHexadecimal
    },
    "Hexadecimal": {
        "Binary": numberConvertions.hexadecimalToBinary,
        "Octal": numberConvertions.hexadecimalToOctal,
        "Decimal": numberConvertions.hexadecimalToDecimal
    },
    // Length Convertions
    "Meters": {
        "Feet": lengthConvertions.metersToFeet
    },
    "Feet": {
        "Meters": lengthConvertions.feetToMeters
    }
}