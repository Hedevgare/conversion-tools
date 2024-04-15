/**
 * Binary convertions
 */
export function octalToBinary(octal) {
    return decimalToBinary(octalToDecimal(octal));
}

export function decimalToBinary(decimal) {
    let binary = "";
    while (decimal > 0) {
        binary = decimal % 2 + binary;
        decimal = Math.floor(decimal / 2);
    }
    return binary;
}

export function hexadecimalToBinary(hexadecimal) {
    return decimalToBinary(hexadecimalToDecimal(hexadecimal));
}

/**
 * Octal convertions
 */
export function binaryToOctal(binary) {
    return decimalToOctal(binaryToDecimal(binary));
}

export function decimalToOctal(decimal) {
    if(decimal < 8) return decimal;
    let octal = "";
    while(decimal >= 8) {
        octal = decimal % 8 + octal;
        decimal = Math.floor(decimal / 8);
    }
    return decimal + octal;
}

export function hexadecimalToOctal(hexadecimal) {
    return decimalToOctal(hexadecimalToDecimal(hexadecimal));
}

/**
 * Decimal convertions
 */
export function binaryToDecimal(binary) {
    return binary.split("")
        .map((n) => parseInt(n))
        .reverse()
        .reduce((total, current, index) => total + current * Math.pow(2, index), 0);
}

export function octalToDecimal(octal) {
    return octal.split("")
        .map((n) => parseInt(n))
        .reverse()
        .reduce((total, current, index) => total + current * Math.pow(8, index), 0);
}

export function hexadecimalToDecimal(hexadecimal) {
    return hexadecimal.split("")
        .reverse()
        .reduce((total, current, index) => total + parseInt(mapHexadecimalCharacter(current)) * Math.pow(16, index), 0);
}

/**
 * Hexadecimal convertions
 */
export function binaryToHexadecimal(binary) {
    return decimalToHexadecimal(binaryToDecimal(binary));
}

export function octalToHexadecimal(octal) {
    return decimalToHexadecimal(octalToDecimal(octal));
}

export function decimalToHexadecimal(decimal) {
    let hexadecimal = "";
    while (decimal > 0) {
        hexadecimal = mapHexadecimalCharacter(decimal % 16) + hexadecimal;
        decimal = Math.floor(decimal / 16);
    }
    return hexadecimal;
}

function mapHexadecimalCharacter(number) {
    let character;
    switch(number) {
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