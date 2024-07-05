import { expect, test } from 'vitest'

/**
 * Test binary conversions
 */

import { octalToBinary, decimalToBinary, hexadecimalToBinary } from '../../src/helpers/numberConversions'
// Octal to binary
test('octalToBinary: 34 => 11100', () => {
    expect(octalToBinary('34')).toBe('11100');
});
test('octalToBinary: -21 => -10001', () => {
    expect(octalToBinary('-21')).toBe('-10001');
});
test('octalToBinary: 0 => 0', () => {
    expect(octalToBinary('0')).toBe('0');
});
// Decimal to binary
test('decimalToBinary: 73 => 1001001', () => {
    expect(decimalToBinary('73')).toBe('1001001');
});
test('decimalToBinary: -31 => -11111', () => {
    expect(decimalToBinary('-31')).toBe('-11111');
});
test('decimalToBinary: 0 => 0', () => {
    expect(decimalToBinary('0')).toBe('0');
});
// Hexadecimal to binary
test('hexadecimalToBinary: 1A => 11010', () => {
    expect(hexadecimalToBinary('1A')).toBe('11010');
});
test('hexadecimalToBinary: -FA => -11111010', () => {
    expect(hexadecimalToBinary('-FA')).toBe('-11111010');
});
test('hexadecimalToBinary: 0 => 0', () => {
    expect(hexadecimalToBinary('0')).toBe('0');
});

/**
 * Test octal conversions
 */

import { binaryToOctal, decimalToOctal, hexadecimalToOctal } from '../../src/helpers/numberConversions'
// Binary to octal
test('binaryToOctal: 11100 => 34', () => {
    expect(binaryToOctal('11100')).toBe('34');
});
test('binaryToOctal: -10001 => -21', () => {
    expect(binaryToOctal('-10001')).toBe('-21');
});
test('binaryToOctal: 0 => 0', () => {
    expect(binaryToOctal('0')).toBe('0');
});
// Decimal to octal
test('decimalToOctal: 73 => 111', () => {
    expect(decimalToOctal('73')).toBe('111');
});
test('decimalToOctal: -31 => -37', () => {
    expect(decimalToOctal('-31')).toBe('-37');
});
test('decimalToOctal: 0 => 0', () => {
    expect(decimalToOctal('0')).toBe('0');
});
// Hexadecimal to octal
test('hexadecimalToOctal: 1A => 32', () => {
    expect(hexadecimalToOctal('1A')).toBe('32');
});
test('hexadecimalToOctal: -FA => -372', () => {
    expect(hexadecimalToOctal('-FA')).toBe('-372');
});
test('hexadecimalToOctal: 0 => 0', () => {
    expect(hexadecimalToOctal('0')).toBe('0');
});

/**
 * Test decimal conversions
 */

import { binaryToDecimal, octalToDecimal, hexadecimalToDecimal } from '../../src/helpers/numberConversions'
// Binary to decimal
test('binaryToDecimal: 11100 => 28', () => {
    expect(binaryToDecimal('11100')).toBe('28');
});
test('binaryToDecimal: -10001 => -17', () => {
    expect(binaryToDecimal('-10001')).toBe('-17');
});
test('binaryToDecimal: 0 => 0', () => {
    expect(binaryToDecimal('0')).toBe('0');
});
// Octal to decimal
test('octalToDecimal: 34 => 28', () => {
    expect(octalToDecimal('34')).toBe('28');
});
test('octalToDecimal: -21 => -17', () => {
    expect(octalToDecimal('-21')).toBe('-17');
});
test('octalToDecimal: 0 => 0', () => {
    expect(octalToDecimal('0')).toBe('0');
});
// Hexadecimal to decimal
test('hexadecimalToDecimal: 1A => 26', () => {
    expect(hexadecimalToDecimal('1A')).toBe('26');
});
test('hexadecimalToDecimal: -FA => -250', () => {
    expect(hexadecimalToDecimal('-FA')).toBe('-250');
});
test('hexadecimalToDecimal: 0 => 0', () => {
    expect(hexadecimalToDecimal('0')).toBe('0');
});

/**
 * Test hexadecimal conversions
 */
import { decimalToHexadecimal, binaryToHexadecimal, octalToHexadecimal } from '../../src/helpers/numberConversions'
import { validateUnit } from '../../src/helpers/validations';

// Binary to hexadecimal
test('binaryToHexadecimal: 11100 => 1C', () => {
    expect(binaryToHexadecimal('11100')).toBe('1C');
});
test('binaryToHexadecimal: -10001 => -11', () => {
    expect(binaryToHexadecimal('-10001')).toBe('-11');
});
test('binaryToHexadecimal: 0 => 0', () => {
    expect(binaryToHexadecimal('0')).toBe('0');
});
// Octal to hexadecimal
test('octalToHexadecimal: 34 => 1C', () => {
    expect(octalToHexadecimal('34')).toBe('1C');
});
test('octalToHexadecimal: -21 => -11', () => {
    expect(octalToHexadecimal('-21')).toBe('-11');
});
test('octalToHexadecimal: 0 => 0', () => {
    expect(octalToHexadecimal('0')).toBe('0');
});
// Decimal to hexadecimal
test('decimalToHexadecimal: 73 => 49', () => {
    expect(decimalToHexadecimal('73')).toBe('49');
});
test('decimalToHexadecimal: -31 => -1F', () => {
    expect(decimalToHexadecimal('-31')).toBe('-1F');
});
test('decimalToHexadecimal: 0 => 0', () => {
    expect(decimalToHexadecimal('0')).toBe('0');
});

/**
 * Test invalid conversions
 */
test('binaryToDecimal: 2 => Invalid input!', () => {
    expect(validateUnit('Binary','Decimal','2')).toBe('Invalid input!');
});
test('octalToDecimal: 8 => Invalid input!', () => {
    expect(validateUnit('Octal', 'Decimal', '8')).toBe('Invalid input!');
});
test('decimalToBinary: 2.5 => Invalid input!', () => {
    expect(validateUnit('Decimal','Binary','2.5')).toBe('Invalid input!');
});
test('hexadecimalToDecimal: 1G => Invalid input!', () => {
    expect(validateUnit('Hexadecimal', 'Decimal', '1G')).toBe('Invalid input!');
});