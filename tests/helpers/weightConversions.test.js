import { expect, test } from "vitest";
import { startConversion } from '../../src/helpers/conversions';

const errorMessage = "Invalid!";

/**
 * Test Grams conversions
 */
test('Kilograms to Grams', () => {
    expect(startConversion('Kilograms', 'Grams', 5, true)).toBe(5000);
});
test('Pounds to Grams', () => {
    expect(startConversion('Pounds', 'Grams', 5, true)).toBe(2267.96185);
});

/**
 * Test Kilograms conversions
 */
test('Grams to Kilograms', () => {
    expect(startConversion('Grams', 'Kilograms', 5000, true)).toBe(5);
});
test('Pounds to Kilograms', () => {
    expect(startConversion('Pounds', 'Kilograms', 10, true)).toBe(4.5359237);
});

/**
 * Test Pounds conversions
 */
test('Grams to Pounds', () => {
    expect(startConversion('Grams', 'Pounds', 5, true)).toBe(0.0110231131);
});
test('Kilograms to Pounds', () => {
    expect(startConversion('Kilograms', 'Pounds', 20, true)).toBe(44.092452437);
});