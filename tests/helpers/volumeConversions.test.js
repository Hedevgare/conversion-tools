import { expect, test } from "vitest";
import { startConvertion } from '../../src/helpers/conversions';

/**
 * Test Litres conversions
 */
test('Gallons to Litres', () => {
    expect(startConvertion('Gallons', 'Litres', 5, true)).toBe(18.9270589);
    expect(startConvertion('Gallons', 'Litres', 0, true)).toBe(0);
    expect(startConvertion('Gallons', 'Litres', -1, true)).toBe("Invalid input!");
});

/**
 * Test Gallons conversions
 */
test('Litres to Gallons', () => {
    expect(startConvertion('Litres', 'Gallons', 5, true)).toBe(1.32086026);
    expect(startConvertion('Litres', 'Gallons', 0, true)).toBe(0);
    expect(startConvertion('Litres', 'Gallons', -16, true)).toBe("Invalid input!");
});