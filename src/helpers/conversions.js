import * as numberConversions from "./numberConversions";
import * as lengthConversions from "./lengthConversions";
import * as temperatureConversions from "./temperatureConversions";
import * as volumeConversions from "./volumeConversions";
import * as weightConversions from "./weightConversions";
import * as timeConversions from "./timeConversions";
import * as areaConversions from "./areaConversions";
import * as velocityConversions from "./velocityConversions";
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
        "Miles": lengthConversions.centimetersToMiles,
        "Millimeters": lengthConversions.centimetersToMillimeters,
        "Yards": lengthConversions.centimetersToYards
    },
    "Feet": {
        "Centimeters": lengthConversions.feetToCentimeters,
        "Inches": lengthConversions.feetToInches,
        "Kilometers": lengthConversions.feetToKilometers,
        "Meters": lengthConversions.feetToMeters,
        "Miles": lengthConversions.feetToMiles,
        "Millimeters": lengthConversions.feetToMillimeters,
        "Yards": lengthConversions.feetToYards
    },
    "Inches": {
        "Centimeters": lengthConversions.inchesToCentimeters,
        "Feet": lengthConversions.inchesToFeet,
        "Kilometers": lengthConversions.inchesToKilometers,
        "Meters": lengthConversions.inchesToMeters,
        "Miles": lengthConversions.inchesToMiles,
        "Millimeters": lengthConversions.inchesToMillimeters,
        "Yards": lengthConversions.inchesToYards
    },
    "Kilometers": {
        "Centimeters": lengthConversions.kilometersToCentimeters,
        "Feet": lengthConversions.kilometersToFeet,
        "Inches": lengthConversions.kilometersToInches,
        "Meters": lengthConversions.kilometersToMeters,
        "Miles": lengthConversions.kilometersToMiles,
        "Millimeters": lengthConversions.kilometersToMillimeters,
        "Yards": lengthConversions.kilometersToYards
    },
    "Meters": {
        "Centimeters": lengthConversions.metersToCentimeters,
        "Feet": lengthConversions.metersToFeet,
        "Inches": lengthConversions.metersToInches,
        "Kilometers": lengthConversions.metersToKilometers,
        "Miles": lengthConversions.metersToMiles,
        "Millimeters": lengthConversions.metersToMillimeters,
        "Yards": lengthConversions.metersToYards
    },
    "Millimeters": {
        "Centimeters": lengthConversions.millimetersToCentimeters,
        "Feet": lengthConversions.millimetersToFeet,
        "Inches": lengthConversions.millimetersToInches,
        "Kilometers": lengthConversions.millimetersToKilometers,
        "Meters": lengthConversions.millimetersToMeters,
        "Miles": lengthConversions.millimetersToMiles,
        "Yards": lengthConversions.millimetersToYards
    },
    "Miles": {
        "Centimeters": lengthConversions.milesToCentimeters,
        "Feet": lengthConversions.milesToFeet,
        "Inches": lengthConversions.milesToInches,
        "Kilometers": lengthConversions.milesToKilometers,
        "Meters": lengthConversions.milesToMeters,
        "Millimeters": lengthConversions.milesToMillimeters,
        "Yards": lengthConversions.milesToYards
    },
    "Yards": {
        "Centimeters": lengthConversions.yardsToCentimeters,
        "Feet": lengthConversions.yardsToFeet,
        "Inches": lengthConversions.yardsToInches,
        "Kilometers": lengthConversions.yardsToKilometers,
        "Meters": lengthConversions.yardsToMeters,
        "Millimeters": lengthConversions.yardsToMillimeters,
        "Miles": lengthConversions.yardsToMiles
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
        "Kilograms": weightConversions.gramsToKilograms,
    },
    "Kilograms": {
        "Grams": weightConversions.kilogramsToGrams,
        "Pounds": weightConversions.kilogramsToPounds,
    },
    "Pounds": {
        "Grams": weightConversions.poundsToGrams,
        "Kilograms": weightConversions.poundsToKilograms,
    },
    // Time Conversions
    "Seconds": {
        "Minutes": timeConversions.secondsToMinutes,
        "Hours": timeConversions.secondsToHours,
        "Days": timeConversions.secondsToDays,
    },
    "Minutes": {
        "Seconds": timeConversions.minutesToSeconds,
        "Hours": timeConversions.minutesToHours,
        "Days": timeConversions.minutesToDays,
    },
    "Hours": {
        "Seconds": timeConversions.hoursToSeconds,
        "Minutes": timeConversions.hoursToMinutes,
        "Days": timeConversions.hoursToDays,
    },
    "Days": {
        "Seconds": timeConversions.daysToSeconds,
        "Minutes": timeConversions.daysToMinutes,
        "Hours": timeConversions.daysToHours,
    },
    // Area Conversions
    "Square Meters": {
        "Ares": areaConversions.squareMetersToAre,
    },
    "Ares": {
        "Square Meters": areaConversions.areToSquareMeters,
    },
    // Velocity Conversions
    "Kilometers per Hour": {
        "Miles per Hour": velocityConversions.kilometersPerHourToMilesPerHour,
    },
    "Miles per Hour": {
        "Kilometers per Hour": velocityConversions.milesPerHourToKilometersPerHour,
    },
}

export function startConversion(fromUnit, toUnit, value, shouldRound = false) {
    if (validateUnit(fromUnit, value)) {
        if (!conversions[fromUnit][toUnit]) return;
        let conversion = conversions[fromUnit][toUnit](value);
        if (shouldRound) {
            return Number(conversion.toFixed(10));
        } else {
            return conversion;
        }
    } else {
        return "Invalid!";
    }
}