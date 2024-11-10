import { expect, test } from "vitest";
import { startConversion } from '../../src/helpers/conversions';

/**
 * Test Litres conversions
 */
test('Gallons to Litres', () => {
    expect(startConversion('Gallons', 'Litres', 5, true)).toBe(18.9270589);
    expect(startConversion('Gallons', 'Litres', 0, true)).toBe(0);
    expect(startConversion('Gallons', 'Litres', -1, true)).toBe("Invalid input!");
});

/**
 * Test Gallons conversions
 */
test('Litres to Gallons', () => {
    expect(startConversion('Litres', 'Gallons', 5, true)).toBe(1.32086026);
    expect(startConversion('Litres', 'Gallons', 0, true)).toBe(0);
    expect(startConversion('Litres', 'Gallons', -16, true)).toBe("Invalid input!");
});