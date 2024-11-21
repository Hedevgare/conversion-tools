function regexValidation(unit) {
    let regex;
    switch (unit) {
        case "Binary":
            regex = new RegExp("^[\-]?[01]+$", "g");
            break;
        case "Octal":
            regex = new RegExp("^[\-]?[0-7]+$", "g");
            break;
        case "Decimal":
            regex = new RegExp("^[\-]?[0-9]+$", "g");
            break;
        case "Hexadecimal":
            regex = new RegExp("^[\-]?[0-9A-F]+$", "g");
            break;
        case "Centimeters":
        case "Feet":
        case "Inches":
        case "Kilometers":
        case "Meters":
        case "Millimeters":
        case "Litres":
        case "Gallons":
        case "Kelvin":
        case "Rankine":
        case "Grams":
        case "Pounds":
        case "Seconds":
        case "Minutes":
        case "Hours":
        case "Days":
        case "Square Meters":
        case "Ares":
            regex = new RegExp("^[0-9.0-9]+$", "g");
            break;
        case "Celsius":
        case "Fahrenheit":
            regex = new RegExp("^[\-]?[0-9]*[\.]?[0-9]+$", "g");
            break;
    }
    return regex;
}

export function validateUnit(fromUnit, value) {
    return regexValidation(fromUnit).test(value);
}