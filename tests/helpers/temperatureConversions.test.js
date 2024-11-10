import { expect, test } from "vitest";
import { startConversion } from '../../src/helpers/conversions';

/**
 * Test Celsius conversions
 */
test('Fahrenheit to Celsius', () => {
    expect(startConversion('Fahrenheit', 'Celsius', 32, true)).toBe(0);
    expect(startConversion('Fahrenheit', 'Celsius', 0, true)).toBe(-17.7777777778);
    expect(startConversion('Fahrenheit', 'Celsius', -25, true)).toBe(-31.6666666667);
});
test('Kelvin to Celsius', () => {
    expect(startConversion('Kelvin', 'Celsius', 273.15, true)).toBe(0);
    expect(startConversion('Kelvin', 'Celsius', 0, true)).toBe(-273.15);
    expect(startConversion('Kelvin', 'Celsius', -125, true)).toBe('Invalid input!');
});
test('Rankine to Celsius', () => {
    expect(startConversion('Rankine', 'Celsius', 491.67, true)).toBe(0);
    expect(startConversion('Rankine', 'Celsius', 0, true)).toBe(-273.15);
    expect(startConversion('Rankine', 'Celsius', -125, true)).toBe('Invalid input!');
});

/**
 * Test Fahrenheit conversions
 */
test('Celsius to Fahrenheit', () => {
    expect(startConversion('Celsius', 'Fahrenheit', 0, true)).toBe(32);
    expect(startConversion('Celsius', 'Fahrenheit', 25, true)).toBe(77);
    expect(startConversion('Celsius', 'Fahrenheit', -100.5, true)).toBe(-148.9);
});
test('Kelvin to Fahrenheit', () => {
    expect(startConversion('Kelvin', 'Fahrenheit', 273.15, true)).toBe(32);
    expect(startConversion('Kelvin', 'Fahrenheit', 0, true)).toBe(-459.67);
    expect(startConversion('Kelvin', 'Fahrenheit', -125, true)).toBe('Invalid input!');
});
test('Rankine to Fahrenheit', () => {
    expect(startConversion('Rankine', 'Fahrenheit', 491.67, true)).toBe(32);
    expect(startConversion('Rankine', 'Fahrenheit', 0, true)).toBe(-459.67);
    expect(startConversion('Rankine', 'Fahrenheit', -125, true)).toBe('Invalid input!');
});

/**
 * Test Kelvin conversions
 */
test('Celsius to Kelvin', () => {
    expect(startConversion('Celsius', 'Kelvin', 0, true)).toBe(273.15);
    expect(startConversion('Celsius', 'Kelvin', 18.7, true)).toBe(291.85);
    expect(startConversion('Celsius', 'Kelvin', -25, true)).toBe(248.15);
});
test('Fahrenheit to Kelvin', () => {
    expect(startConversion('Fahrenheit', 'Kelvin', 32, true)).toBe(273.15);
    expect(startConversion('Fahrenheit', 'Kelvin', 0, true)).toBe(255.3722222222);
    expect(startConversion('Fahrenheit', 'Kelvin', -100, true)).toBe(199.8166666667);
});
test('Rankine to Kelvin', () => {
    expect(startConversion('Rankine', 'Kelvin', 491.67, true)).toBe(273.15);
    expect(startConversion('Rankine', 'Kelvin', 0, true)).toBe(0);
    expect(startConversion('Rankine', 'Kelvin', -125, true)).toBe('Invalid input!');
});

/**
 * Test Rankine conversions
 */
test('Celsius to Rankine', () => {
    expect(startConversion('Celsius', 'Rankine', 0, true)).toBe(491.67);
    expect(startConversion('Celsius', 'Rankine', 25, true)).toBe(536.67);
    expect(startConversion('Celsius', 'Rankine', -100, true)).toBe(311.67);
});
test('Fahrenheit to Rankine', () => {
    expect(startConversion('Fahrenheit', 'Rankine', '32', true)).toBe(491.67);
    expect(startConversion('Fahrenheit', 'Rankine', '0', true)).toBe(459.67);
    expect(startConversion('Fahrenheit', 'Rankine', '-100', true)).toBe(359.67);
});
test('Kelvin to Rankine', () => {
    expect(startConversion('Kelvin', 'Rankine', 273.15, true)).toBe(491.67);
    expect(startConversion('Kelvin', 'Rankine', 0, true)).toBe(0);
    expect(startConversion('Kelvin', 'Rankine', -125, true)).toBe('Invalid input!');
});