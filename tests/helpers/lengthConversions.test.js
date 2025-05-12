import { expect, test } from 'vitest'
import { startConversion } from '../../src/helpers/conversions';

/**
 * Test feet conversions
 */
test('Meters to Feet', () => {
    expect(startConversion('Meters', 'Feet', 17, true)).toBe(55.7742782152);
    expect(startConversion('Meters', 'Feet', 0, true)).toBe(0);
});
test('Inches to Feet', () => { 
    expect(startConversion('Inches', 'Feet', 17, true)).toBe(1.4166666667);
    expect(startConversion('Inches', 'Feet', 0, true)).toBe(0);
});
test('Centimeters to Feet' , () => {
    expect(startConversion('Centimeters', 'Feet', 23, true)).toBe(0.7545931759);
    expect(startConversion('Centimeters', 'Feet', 0, true)).toBe(0);
});
test('Millimeters to Feet', () => {
    expect(startConversion('Millimeters', 'Feet', 5, true)).toBe(0.0164041995);
    expect(startConversion('Millimeters', 'Feet', 0, true)).toBe(0);
});
test('Kilometers to Feet', () => {
    expect(startConversion('Kilometers', 'Feet', 0.7, true)).toBe(2296.5879265092);
    expect(startConversion('Kilometers', 'Feet', 0, true)).toBe(0);
});
test('Miles to Feet', () => {
    expect(startConversion('Miles', 'Feet', 0.5, true)).toBe(2640);
    expect(startConversion('Miles', 'Feet', 0, true)).toBe(0);
});

/**
 * Test inches conversions
 */
test('Meters to Inches', () => {
    expect(startConversion('Meters', 'Inches', 4, true)).toBe(157.4803149606);
    expect(startConversion('Meters', 'Inches', 0, true)).toBe(0);
});
test('Feet to Inches', () => {
    expect(startConversion('Feet', 'Inches', 17, true)).toBe(204);
    expect(startConversion('Feet', 'Inches', 0, true)).toBe(0);
});
test('Centimeters to Inches', () => {
    expect(startConversion('Centimeters', 'Inches', 23, true)).toBe(9.0551181102);
    expect(startConversion('Centimeters', 'Inches', 0, true)).toBe(0);
});
test('Millimeters to Inches', () => {
    expect(startConversion('Millimeters', 'Inches', 5, true)).toBe(0.1968503937);
    expect(startConversion('Millimeters', 'Inches', 0, true)).toBe(0);
});
test('Kilometers to Inches', () => {
    expect(startConversion('Kilometers', 'Inches', 0.7, true)).toBe(27559.0551181102);
    expect(startConversion('Kilometers', 'Inches', 0, true)).toBe(0);
});
test('Miles to Inches', () => {
    expect(startConversion('Miles', 'Inches', 0.5, true)).toBe(31680);
    expect(startConversion('Miles', 'Inches', 0, true)).toBe(0);
});

/**
 * Test centimeters conversions
 */
test('Meters to Centimeters', () => {
    expect(startConversion('Meters', 'Centimeters', 4, true)).toBe(400);
    expect(startConversion('Meters', 'Centimeters', 0, true)).toBe(0);
});
test('Feet to Centimeters', () => {
    expect(startConversion('Feet', 'Centimeters', 17, true)).toBe(518.16);
    expect(startConversion('Feet', 'Centimeters', 0, true)).toBe(0);
});
test('Inches to Centimeters', () => {
    expect(startConversion('Inches', 'Centimeters', 23, true)).toBe(58.42);
    expect(startConversion('Inches', 'Centimeters', 0, true)).toBe(0);
});
test('Millimeters to Centimeters', () => {
    expect(startConversion('Millimeters', 'Centimeters', 5, true)).toBe(0.5);
    expect(startConversion('Millimeters', 'Centimeters', 0, true)).toBe(0);
});
test('Kilometers to Centimeters', () => {
    expect(startConversion('Kilometers', 'Centimeters', 0.7, true)).toBe(70000);
    expect(startConversion('Kilometers', 'Centimeters', 0, true)).toBe(0);
});
test('Miles to Centimeters', () => {
    expect(startConversion('Miles', 'Centimeters', 0.5, true)).toBe(80467.2);
    expect(startConversion('Miles', 'Centimeters', 0, true)).toBe(0);
});

/**
 * Test millimeters conversions
 */
test('Meters to Millimeters', () => {
    expect(startConversion('Meters', 'Millimeters', 4, true)).toBe(4000);
    expect(startConversion('Meters', 'Millimeters', 0, true)).toBe(0);
});
test('Feet to Millimeters', () => {
    expect(startConversion('Feet', 'Millimeters', 17, true)).toBe(5181.6);
    expect(startConversion('Feet', 'Millimeters', 0, true)).toBe(0);
});
test('Inches to Millimeters', () => {
    expect(startConversion('Inches', 'Millimeters', 23, true)).toBe(584.2);
    expect(startConversion('Inches', 'Millimeters', 0, true)).toBe(0);
});
test('Centimeters to Millimeters', () => {
    expect(startConversion('Centimeters', 'Millimeters', 5, true)).toBe(50);
    expect(startConversion('Centimeters', 'Millimeters', 0, true)).toBe(0);
});
test('Kilometers to Millimeters', () => {
    expect(startConversion('Kilometers', 'Millimeters', 0.7, true)).toBe(700000);
    expect(startConversion('Kilometers', 'Millimeters', 0, true)).toBe(0);
});
test('Miles to Millimeters', () => {
    expect(startConversion('Miles', 'Millimeters', 0.5, true)).toBe(804672);
    expect(startConversion('Miles', 'Millimeters', 0, true)).toBe(0);
});
/**
 * Test kilometers conversions
 */
test('Meters to Kilometers', () => {
    expect(startConversion('Meters', 'Kilometers', 4, true)).toBe(0.004);
    expect(startConversion('Meters', 'Kilometers', 0, true)).toBe(0);
});
test('Feet to Kilometers', () => {
    expect(startConversion('Feet', 'Kilometers', 17, true)).toBe(0.0051816);
    expect(startConversion('Feet', 'Kilometers', 0, true)).toBe(0);
});
test('Inches to Kilometers', () => {
    expect(startConversion('Inches', 'Kilometers', 23, true)).toBe(0.0005842);
    expect(startConversion('Inches', 'Kilometers', 0, true)).toBe(0);
});
test('Centimeters to Kilometers', () => {
    expect(startConversion('Centimeters', 'Kilometers', 5, true)).toBe(0.00005);
    expect(startConversion('Centimeters', 'Kilometers', 0, true)).toBe(0);
});
test('Millimeters to Kilometers', () => {
    expect(startConversion('Millimeters', 'Kilometers', 5, true)).toBe(0.000005);
    expect(startConversion('Millimeters', 'Kilometers', 0, true)).toBe(0);
});
test('Miles to Kilometers', () => {
    expect(startConversion('Miles', 'Kilometers', 0.5, true)).toBe(0.804672);
    expect(startConversion('Miles', 'Kilometers', 0, true)).toBe(0);
});

/**
 * Test miles conversions
 */
test('Meters to Miles', () => {
    expect(startConversion('Meters', 'Miles', 2000, true)).toBe(1.2427423845);
    expect(startConversion('Meters', 'Miles', 0, true)).toBe(0);
});
test('Feet to Miles', () => {
    expect(startConversion('Feet', 'Miles', 1750, true)).toBe(0.3314393939);
    expect(startConversion('Feet', 'Miles', 0, true)).toBe(0);
});
test('Inches to Miles', () => {
    expect(startConversion('Inches', 'Miles', 3000, true)).toBe(0.0473484848);
    expect(startConversion('Inches', 'Miles', 0, true)).toBe(0);
});
test('Centimeters to Miles', () => {
    expect(startConversion('Centimeters', 'Miles', 5000, true)).toBe(0.0310685596);
    expect(startConversion('Centimeters', 'Miles', 0, true)).toBe(0);
});
test('Millimeters to Miles', () => {
    expect(startConversion('Millimeters', 'Miles', 60000000, true)).toBe(37.2822715342);
    expect(startConversion('Millimeters', 'Miles', 0, true)).toBe(0);
});
test('Kilometers to Miles', () => {
    expect(startConversion('Kilometers', 'Miles', 4, true)).toBe(2.4854847689);
    expect(startConversion('Kilometers', 'Miles', 0, true)).toBe(0);
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