import { expect, test } from "vitest";
import { startConversion } from '../../src/helpers/conversions';

/**
 * Test Grams conversions
 */
test('Pounds to Grams', () => {
    expect(startConversion('Pounds', 'Grams', 5, true)).toBe(2267.96185);
    expect(startConversion('Pounds', 'Grams', 0, true)).toBe(0);
    expect(startConversion('Pounds', 'Grams', -1, true)).toBe("Invalid input!");
});

/**
 * Test Grams conversions
 */
test('Grams to Pounds', () => {
    expect(startConversion('Grams', 'Pounds', 5, true)).toBe(0.0110231131);
    expect(startConversion('Grams', 'Pounds', 0, true)).toBe(0);
    expect(startConversion('Grams', 'Pounds', -16, true)).toBe("Invalid input!");
});