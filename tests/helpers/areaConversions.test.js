import { expect, test } from "vitest"
import { startConversion } from '../../src/helpers/conversions';

/**
 * Test Square Meters conversions
 */
test('Are to Square Meters', () => {
    expect(startConversion('Ares', 'Square Meters', 5, true)).toBe(500);
    expect(startConversion('Ares', 'Square Meters', -1, true)).toBe("Invalid input!");
});

/**
 * Test Ares conversions
 */
test('Square Meters to Ares', () => {
    expect(startConversion('Square Meters', 'Ares', 2500, true)).toBe(25);
    expect(startConversion('Square Meters', 'Ares', -1, true)).toBe("Invalid input!");
});