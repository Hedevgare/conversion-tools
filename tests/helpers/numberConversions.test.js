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