import { expect, test } from 'vitest'
import { startConvertion } from '../../src/helpers/conversions';

/**
 * Test feet conversions
 */

// Meters to feet
test('Meters to Feet', () => {
    expect(startConvertion('Meters', 'Feet', 17, true)).toBe(55.7742782152);
    expect(startConvertion('Meters', 'Feet', 0, true)).toBe(0);
});
// Inches to feet
test('Inches to Feet', () => { 
    expect(startConvertion('Inches', 'Feet', 17, true)).toBe(1.4166666667);
    expect(startConvertion('Inches', 'Feet', 0, true)).toBe(0);
});
// Centimeters to feet
test('Centimeters to Feet' , () => {
    expect(startConvertion('Centimeters', 'Feet', 23, true)).toBe(0.7545931759);
    expect(startConvertion('Centimeters', 'Feet', 0, true)).toBe(0);
});
// Millimeters to feet
test('Millimeters to Feet', () => {
    expect(startConvertion('Millimeters', 'Feet', 5, true)).toBe(0.0164041995);
    expect(startConvertion('Millimeters', 'Feet', 0, true)).toBe(0);
});
// Kilometers to feet
test('Kilometers to Feet', () => {
    expect(startConvertion('Kilometers', 'Feet', 0.7, true)).toBe(2296.5879265092);
    expect(startConvertion('Kilometers', 'Feet', 0, true)).toBe(0);
});

/**
 * Test invalid inputs
 */
test('Negative Numbers', () => {
    expect(startConvertion('Meters', 'Feet', -1)).toBe('Invalid input!');
});
test('Input with Text Characters', () => {
    expect(startConvertion('Meters', 'Feet', 'test')).toBe('Invalid input!');
});