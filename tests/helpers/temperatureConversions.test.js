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
test('Rankine to Celsius', () => {
    expect(startConvertion('Rankine', 'Celsius', 491.67, true)).toBe(0);
    expect(startConvertion('Rankine', 'Celsius', 0, true)).toBe(-273.15);
    expect(startConvertion('Rankine', 'Celsius', -125, true)).toBe(-342.5944444444);
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
test('Rankine to Fahrenheit', () => {
    expect(startConvertion('Rankine', 'Fahrenheit', 491.67, true)).toBe(32);
    expect(startConvertion('Rankine', 'Fahrenheit', 0, true)).toBe(-459.67);
    expect(startConvertion('Rankine', 'Fahrenheit', -125, true)).toBe(-584.67);
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
test('Rankine to Kelvin', () => {
    expect(startConvertion('Rankine', 'Kelvin', 491.67, true)).toBe(273.15);
    expect(startConvertion('Rankine', 'Kelvin', 0, true)).toBe(0);
    expect(startConvertion('Rankine', 'Kelvin', -125, true)).toBe(-69.4444444444);
});

/**
 * Test Rankine conversions
 */
test('Celsius to Rankine', () => {
    expect(startConvertion('Celsius', 'Rankine', 0, true)).toBe(491.67);
    expect(startConvertion('Celsius', 'Rankine', 25, true)).toBe(536.67);
    expect(startConvertion('Celsius', 'Rankine', -100, true)).toBe(311.67);
});
test('Fahrenheit to Rankine', () => {
    expect(startConvertion('Fahrenheit', 'Rankine', '32', true)).toBe(491.67);
    expect(startConvertion('Fahrenheit', 'Rankine', '0', true)).toBe(459.67);
    expect(startConvertion('Fahrenheit', 'Rankine', '-100', true)).toBe(359.67);
});
test('Kelvin to Rankine', () => {
    expect(startConvertion('Kelvin', 'Rankine', 273.15, true)).toBe(491.67);
    expect(startConvertion('Kelvin', 'Rankine', 0, true)).toBe(0);
    expect(startConvertion('Kelvin', 'Rankine', -125, true)).toBe(-225);
});