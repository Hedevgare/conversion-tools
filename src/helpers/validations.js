export function regexValidation(unit) {
    let regex;
    switch (unit) {
        case "Binary":
            regex = new RegExp("^[01]+$", "g");
            break;
        case "Octal":
            regex = new RegExp("^[0-7]+$", "g");
            break;
        case "Decimal":
            regex = new RegExp("^[0-9]+$", "g");
            break;
        case "Hexadecimal":
            regex = new RegExp("^[0-9A-F]+$", "g");
            break;
        case "Centimeters":
        case "Meters":
        case "Kilometers":
        case "Feet":
            regex = new RegExp("^[0-9.0-9]+$", "g");
            break;
    }
    return regex;
}