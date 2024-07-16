import * as numberConversions from "./numberConversions";
import * as lengthConversions from "./lengthConversions";
import * as temperatureConversions from "./temperatureConversions";
import * as volumeConversions from "./volumeConversions";
import * as weightConversions from "./weightConversions";
import { validateUnit } from "./validations";

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
    // Temperature Conversions
    "Celsius": {
        "Fahrenheit": temperatureConversions.celsiusToFahrenheit,
        "Kelvin": temperatureConversions.celsiusToKelvin,
        "Rankine": temperatureConversions.celsiusToRankine
    },
    "Fahrenheit": {
        "Celsius": temperatureConversions.fahrenheitToCelsius,
        "Kelvin": temperatureConversions.fahrenheitToKelvin,
        "Rankine": temperatureConversions.fahrenheitToRankine
    },
    "Kelvin": {
        "Celsius": temperatureConversions.kelvinToCelsius,
        "Fahrenheit": temperatureConversions.kelvinToFahrenheit,
        "Rankine": temperatureConversions.kelvinToRankine
    },
    "Rankine": {
        "Celsius": temperatureConversions.rankineToCelsius,
        "Fahrenheit": temperatureConversions.rankineToFahrenheit,
        "Kelvin": temperatureConversions.rankineToKelvin
    },
    // Volume Conversions
    "Litres": {
        "Gallons": volumeConversions.litresToGallons,
    },
    "Gallons": {
        "Litres": volumeConversions.gallonsToLitres,
    },
    // Weight Conversions
    "Grams": {
        "Pounds": weightConversions.gramsToPounds,
    },
    "Pounds": {
        "Grams": weightConversions.poundsToGrams,
    }
}

export function startConvertion(fromUnit, toUnit, value, shouldRound = false) {
    if (validateUnit(fromUnit, value)) {
        let conversion = conversions[fromUnit][toUnit](value);
        if (shouldRound) {
            return Number(conversion.toFixed(10));
        } else {
            return conversion;
        }
    } else {
        return "Invalid input!";
    }
}