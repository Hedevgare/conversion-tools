export default {
    numbers: {
        name: 'Number',
        units: [
			{ unit: 'Binary', symbol: '0b' },
			{ unit: 'Octal', symbol: '0o' },
			{ unit: 'Decimal', symbol: '0d' },
			{ unit: 'Hexadecimal', symbol: '0x' }
		],
        startFromUnit: { unit: 'Binary', symbol: '0b' },
        startToUnit: { unit: 'Decimal', symbol: '0d' },
        shouldRound: false
    },
    length: {
        name: 'Length',
        units:[
			{ unit: 'Meters', symbol: 'm' },
			{ unit: 'Millimeters', symbol: 'mm' },
			{ unit: 'Centimeters', symbol: 'cm' },
			{ unit: 'Kilometers', symbol: 'km' },
			{ unit: 'Feet', symbol: 'ft' },
			{ unit: 'Inches', symbol: 'in' },
            { unit: 'Miles', symbol: 'mi' },
            { unit: 'Yards', symbol: 'yd' }
		],
        startFromUnit: { unit: 'Meters', symbol: 'm' },
        startToUnit: { unit: 'Feet', symbol: 'ft' },
        shouldRound: true
    },
    temperature: {
        name: 'Temperature',
        units: [
            { unit: 'Celsius', symbol: 'ºC' },
            { unit: 'Fahrenheit', symbol: 'ºF' },
            { unit: 'Kelvin', symbol: 'K' },
            { unit: 'Rankine', symbol: 'ºR' }
        ],
        startFromUnit: { unit: 'Celsius', symbol: 'ºC' },
        startToUnit: { unit: 'Fahrenheit', symbol: 'ºF' },
        shouldRound: true
    },
    volume: {
        name: 'Volume',
        units: [
            { unit: 'Litres', symbol: 'L' },
            { unit: 'Gallons', symbol: 'gal' },
            // { unit: 'Cups', symbol: 'cup' }
        ],
        startFromUnit: { unit: 'Litres', symbol: 'L' },
        startToUnit: { unit: 'Gallons', symbol: 'gal' },
        shouldRound: true
    },
    weight: {
        name: 'Weight',
        units: [
			{ unit: 'Grams', symbol: 'g' },
            { unit: 'Kilograms', symbol: 'kg' },
			{ unit: 'Pounds', symbol: 'lb' },
		],
        startFromUnit: { unit: 'Grams', symbol: 'g' },
        startToUnit: { unit: 'Pounds', symbol: 'lb' },
        shouldRound: true
    },
    time: {
        name: 'Time',
        units: [
            { unit: 'Seconds', symbol: 's' },
            { unit: 'Minutes', symbol: 'min' },
            { unit: 'Hours', symbol: 'h' },
            { unit: 'Days', symbol: 'd' }
        ],
        startFromUnit: { unit: 'Hours', symbol: 'h' },
        startToUnit: { unit: 'Seconds', symbol: 's' },
        shouldRound: true
    },
    area: {
        name: 'Area',
        units: [
            { unit: 'Square Meters', symbol: 'm²' },
            { unit: 'Ares', symbol: 'a' },
        ],
        startFromUnit: { unit: 'Square Meters', symbol: 'm²' },
        startToUnit: { unit: 'Ares', symbol: 'a' },
        shouldRound: true
    },
    velocity: {
        name: 'Velocity',
        units: [
            { unit: 'Kilometers per Hour', symbol: 'km/h' },
            { unit: 'Miles per Hour', symbol: 'mi/h' },
        ],
        startFromUnit: { unit: 'Kilometers per Hour', symbol: 'km/h' },
        startToUnit: { unit: 'Miles per Hour', symbol: 'mi/h' },
        shouldRound: true
    }
}