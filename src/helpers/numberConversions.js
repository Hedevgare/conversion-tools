/**
 * Binary conversions
 */
export function octalToBinary(octal) {
    return decimalToBinary(octalToDecimal(octal));
}

export function decimalToBinary(decimal) {
    let signal = decimal < 0 ? "-" : "";
    let binary = "";
    decimal = Math.abs(decimal);
    while (decimal > 0) {
        binary = decimal % 2 + binary;
        decimal = Math.floor(decimal / 2);
    }
    return signal + binary;
}

export function hexadecimalToBinary(hexadecimal) {
    return decimalToBinary(hexadecimalToDecimal(hexadecimal));
}

/**
 * Octal conversions
 */
export function binaryToOctal(binary) {
    return decimalToOctal(binaryToDecimal(binary));
}

export function decimalToOctal(decimal) {
    let signal = decimal < 0 ? "-" : "";
    decimal = Math.abs(decimal);
    if (0 <= decimal && decimal < 8) return signal + decimal;
    let octal = "";
    while (decimal >= 8) {
        octal = decimal % 8 + octal;
        decimal = Math.floor(decimal / 8);
    }
    return signal + decimal + octal;
}

export function hexadecimalToOctal(hexadecimal) {
    return decimalToOctal(hexadecimalToDecimal(hexadecimal));
}

/**
 * Decimal conversions
 */
export function binaryToDecimal(binary) {
    let signal = binary < 0 ? "-" : "";
    binary = Math.abs(binary);
    return signal + binary.toString().split("")
        .map((n) => parseInt(n))
        .reverse()
        .reduce((total, current, index) => total + current * Math.pow(2, index), 0);
}

export function octalToDecimal(octal) {
    let signal = octal < 0 ? "-" : "";
    octal = Math.abs(octal);
    return signal + octal.toString().split("")
        .map((n) => parseInt(n))
        .reverse()
        .reduce((total, current, index) => total + current * Math.pow(8, index), 0);
}

export function hexadecimalToDecimal(hexadecimal) {
    let signal = hexadecimal < 0 ? "-" : "";
    hexadecimal = Math.abs(hexadecimal);
    return signal + hexadecimal.toString().split("")
        .reverse()
        .reduce((total, current, index) => total + parseInt(mapHexadecimalCharacter(current)) * Math.pow(16, index), 0);
}

/**
 * Hexadecimal conversions
 */
export function binaryToHexadecimal(binary) {
    return decimalToHexadecimal(binaryToDecimal(binary));
}

export function octalToHexadecimal(octal) {
    return decimalToHexadecimal(octalToDecimal(octal));
}

export function decimalToHexadecimal(decimal) {
    let signal = decimal < 0 ? "-" : "";
    decimal = Math.abs(decimal);
    let hexadecimal = "";
    while (decimal > 0) {
        hexadecimal = mapHexadecimalCharacter(decimal % 16) + hexadecimal;
        decimal = Math.floor(decimal / 16);
    }
    return signal + hexadecimal;
}

function mapHexadecimalCharacter(number) {
    let character;
    switch (number) {
        case 10:
            character = "A";
            break;
        case 11:
            character = "B";
            break;
        case 12:
            character = "C";
            break;
        case 13:
            character = "D";
            break;
        case 14:
            character = "E";
            break;
        case 15:
            character = "F";
            break;
        case 'A':
            character = 10;
            break;
        case "B":
            character = 11;
            break;
        case "C":
            character = 12;
            break;
        case "D":
            character = 13;
            break;
        case "E":
            character = 14;
            break;
        case "F":
            character = 15;
            break;
        default:
            character = number;
    }
    return character;
}