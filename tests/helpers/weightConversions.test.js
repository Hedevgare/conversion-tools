import { expect, test } from "vitest";
import { startConvertion } from '../../src/helpers/conversions';

/**
 * Test Grams conversions
 */
test('Pounds to Grams', () => {
    expect(startConvertion('Pounds', 'Grams', 5, true)).toBe(2267.96185);
    expect(startConvertion('Pounds', 'Grams', 0, true)).toBe(0);
    expect(startConvertion('Pounds', 'Grams', -1, true)).toBe("Invalid input!");
});

/**
 * Test Grams conversions
 */
test('Grams to Pounds', () => {
    expect(startConvertion('Grams', 'Pounds', 5, true)).toBe(0.0110231131);
    expect(startConvertion('Grams', 'Pounds', 0, true)).toBe(0);
    expect(startConvertion('Grams', 'Pounds', -16, true)).toBe("Invalid input!");
});