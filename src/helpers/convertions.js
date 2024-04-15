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

/**
 * Decimal convertions
 */
export function binaryToDecimal(binary) {
    return binary.split("")
        .map((n) => parseInt(n))
        .reverse()
        .reduce((total, current, index) => total + current * Math.pow(2, index));
}

export function octalToDecimal(octal) {
    return octal.split("")
        .map((n) => parseInt(n))
        .reverse()
        .reduce((total, current, index) => total + current * Math.pow(8, index));
}

export function hexadecimalToDecimal(hexadecimal) {
    
}