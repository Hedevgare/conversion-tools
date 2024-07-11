import { expect, test } from "vitest";
import { startConvertion } from '../../src/helpers/conversions';

/**
 * Test Celsius conversions
 */
test('Fahrenheit to Celsius', () => {
    expect(startConvertion('Fahrenheit', 'Celsius', 32, true)).toBe(0);
    expect(startConvertion('Fahrenheit', 'Celsius', 0, true)).toBe(-17.7777777778);
    expect(startConvertion('Fahrenheit', 'Celsius', -25, true)).toBe(-31.6666666667);
});
test('Kelvin to Celsius', () => {
    expect(startConvertion('Kelvin', 'Celsius', 273.15, true)).toBe(0);
    expect(startConvertion('Kelvin', 'Celsius', 0, true)).toBe(-273.15);
    expect(startConvertion('Kelvin', 'Celsius', -125, true)).toBe(-398.15);
});

/**
 * Test Fahrenheit conversions
 */
test('Celsius to Fahrenheit', () => {
    expect(startConvertion('Celsius', 'Fahrenheit', 0, true)).toBe(32);
    expect(startConvertion('Celsius', 'Fahrenheit', 25, true)).toBe(77);
    expect(startConvertion('Celsius', 'Fahrenheit', -100.5, true)).toBe(-148.9);
});
test('Kelvin to Fahrenheit', () => {
    expect(startConvertion('Kelvin', 'Fahrenheit', 273.15, true)).toBe(32);
    expect(startConvertion('Kelvin', 'Fahrenheit', 0, true)).toBe(-459.67);
    expect(startConvertion('Kelvin', 'Fahrenheit', -125, true)).toBe(-684.67);
});

/**
 * Test Kelvin conversions
 */
test('Celsius to Kelvin', () => {
    expect(startConvertion('Celsius', 'Kelvin', 0, true)).toBe(273.15);
    expect(startConvertion('Celsius', 'Kelvin', 18.7, true)).toBe(291.85);
    expect(startConvertion('Celsius', 'Kelvin', -25, true)).toBe(248.15);
});
test('Fahrenheit to Kelvin', () => {
    expect(startConvertion('Fahrenheit', 'Kelvin', 32, true)).toBe(273.15);
    expect(startConvertion('Fahrenheit', 'Kelvin', 0, true)).toBe(255.3722222222);
    expect(startConvertion('Fahrenheit', 'Kelvin', -100, true)).toBe(199.8166666667);
});