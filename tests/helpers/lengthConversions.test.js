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


/**
 * Test invalid conversions
 */
import { validateUnit } from '../../src/helpers/validations';
test('metersToFeet: -1 => Invalid input!', () => {
    expect(validateUnit('Meters', 'Feet', -1)).toBe('Invalid input!');
});
test('metersToFeet: test => Invalid input!', () => {
    expect(validateUnit('Meters', 'Feet', 'test')).toBe('Invalid input!');
});