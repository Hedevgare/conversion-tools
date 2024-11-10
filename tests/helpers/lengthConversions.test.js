import { expect, test } from 'vitest'
import { startConversion } from '../../src/helpers/conversions';

/**
 * Test feet conversions
 */

// Meters to feet
test('Meters to Feet', () => {
    expect(startConversion('Meters', 'Feet', 17, true)).toBe(55.7742782152);
    expect(startConversion('Meters', 'Feet', 0, true)).toBe(0);
});
// Inches to feet
test('Inches to Feet', () => { 
    expect(startConversion('Inches', 'Feet', 17, true)).toBe(1.4166666667);
    expect(startConversion('Inches', 'Feet', 0, true)).toBe(0);
});
// Centimeters to feet
test('Centimeters to Feet' , () => {
    expect(startConversion('Centimeters', 'Feet', 23, true)).toBe(0.7545931759);
    expect(startConversion('Centimeters', 'Feet', 0, true)).toBe(0);
});
// Millimeters to feet
test('Millimeters to Feet', () => {
    expect(startConversion('Millimeters', 'Feet', 5, true)).toBe(0.0164041995);
    expect(startConversion('Millimeters', 'Feet', 0, true)).toBe(0);
});
// Kilometers to feet
test('Kilometers to Feet', () => {
    expect(startConversion('Kilometers', 'Feet', 0.7, true)).toBe(2296.5879265092);
    expect(startConversion('Kilometers', 'Feet', 0, true)).toBe(0);
});

/**
 * Test invalid inputs
 */
test('Negative Numbers', () => {
    expect(startConversion('Meters', 'Feet', -1)).toBe('Invalid input!');
});
test('Input with Text Characters', () => {
    expect(startConversion('Meters', 'Feet', 'test')).toBe('Invalid input!');
});