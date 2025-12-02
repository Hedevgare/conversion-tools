import { expect, test } from "vitest";
import { startConversion } from '../../src/helpers/conversions';

const errorMessage = "Invalid!";

/**
 * Test Miles per Hour conversions
 */
test('Kilometers per Hour to Miles per Hour', () => {
    expect(startConversion("Kilometers per Hour", "Miles per Hour", 100, true)).toBe(62.1371192237);
});

/**
 * Test Kilometers per Hour conversions
 */
test('Miles per Hour to Kilometers per Hour', () => {
    expect(startConversion("Miles per Hour", "Kilometers per Hour", 100, true)).toBe(160.9344);
});