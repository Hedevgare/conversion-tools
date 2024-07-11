import { expect, test } from 'vitest'
import { startConvertion } from '../../src/helpers/conversions';

/**
 * Test feet conversions
 */

// Meters to feet
test('Meters to Feet: 17 => 55.7742782152', () => {
    expect(startConvertion('Meters', 'Feet', 17, true)).toBe(55.7742782152);
});
test('Meters to Feet: 0 => 0', () => {
    expect(startConvertion('Meters', 'Feet', 0, true)).toBe(0);
});
// Inches to feet
test('Inches to Feet: 17 => 1.4166666667', () => { 
    expect(startConvertion('Inches', 'Feet', 17, true)).toBe(1.4166666667);
});
test('Inches to Feet: 0 => 0', () => {
    expect(startConvertion('Inches', 'Feet', 0, true)).toBe(0);
});
// Centimeters to feet
test('Centimeters to Feet: 23 => 0.7545931759' , () => {
    expect(startConvertion('Centimeters', 'Feet', 23, true)).toBe(0.7545931759);
});
test('Centimeters to Feet: 0 => 0', () => {
    expect(startConvertion('Centimeters', 'Feet', 0, true)).toBe(0);
});
// Millimeters to feet
test('Millimeters to Feet: 5 => 0.0164041995', () => {
    expect(startConvertion('Millimeters', 'Feet', 5, true)).toBe(0.0164041995);
});
test('Millimeters to Feet: 0 => 0', () => {
    expect(startConvertion('Millimeters', 'Feet', 0, true)).toBe(0);
});
// Kilometers to feet
test('Kilometers to Feet: 0.7 => 2296.5879265092', () => {
    expect(startConvertion('Kilometers', 'Feet', 0.7, true)).toBe(2296.5879265092);
});
test('Kilometers to Feet: 0 => 0', () => {
    expect(startConvertion('Kilometers', 'Feet', 0, true)).toBe(0);
});

/**
 * Test invalid inputs
 */
test('Test for negative numbers: -1 => Invalid input!', () => {
    expect(startConvertion('Meters', 'Feet', -1)).toBe('Invalid input!');
});
test('Test for text characters: test => Invalid input!', () => {
    expect(startConvertion('Meters', 'Feet', 'test')).toBe('Invalid input!');
});