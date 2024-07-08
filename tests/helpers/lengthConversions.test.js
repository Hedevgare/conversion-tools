import { expect, test } from 'vitest'

/**
 * Test feet conversions
 */
import { inchesToFeet, metersToFeet, centimetersToFeet, millimetersToFeet, kilometersToFeet } from '../../src/helpers/lengthConversions';
// Meters to feet
test('metersToFeet: 17 => 55.7742782152', () => {
    expect(metersToFeet(17)).toBe(55.7742782152);
});
test('metersToFeet: 0 => 0', () => {
    expect(metersToFeet(0)).toBe(0);
});