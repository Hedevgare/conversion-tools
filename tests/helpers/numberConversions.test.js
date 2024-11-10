import { expect, test } from 'vitest'
import { startConversion } from '../../src/helpers/conversions';

/**
 * Test binary conversions
 */

// Octal to binary
test('Octal to Binary', () => {
    expect(startConversion('Octal', 'Binary', '34')).toBe('11100');
    expect(startConversion('Octal', 'Binary', '-21')).toBe('-10001');
    expect(startConversion('Octal', 'Binary', '0')).toBe('0');
});
// Decimal to binary
test('Decimal to Binary', () => {
    expect(startConversion('Decimal', 'Binary', '73')).toBe('1001001');
    expect(startConversion('Decimal', 'Binary', '-31')).toBe('-11111');
    expect(startConversion('Decimal', 'Binary', '0')).toBe('0');
});
// Hexadecimal to binary
test('Hexadecimal to Binary', () => {
    expect(startConversion('Hexadecimal', 'Binary', '1A')).toBe('11010');
    expect(startConversion('Hexadecimal', 'Binary', '-FA')).toBe('-11111010');
    expect(startConversion('Hexadecimal', 'Binary', '0')).toBe('0');
});

/**
 * Test octal conversions
 */

// Binary to octal
test('Binary to Octal', () => {
    expect(startConversion('Binary', 'Octal', '11100')).toBe('34');
    expect(startConversion('Binary', 'Octal', '-10001')).toBe('-21');
    expect(startConversion('Binary', 'Octal', '0')).toBe('0');
});
// Decimal to octal
test('Decimal to Octal', () => {
    expect(startConversion('Decimal', 'Octal', '73')).toBe('111');
    expect(startConversion('Decimal', 'Octal', '-31')).toBe('-37');
    expect(startConversion('Decimal', 'Octal', '0')).toBe('0');
});
// Hexadecimal to octal
test('Hexadecimal to Octal', () => {
    expect(startConversion('Hexadecimal', 'Octal', '1A')).toBe('32');
    expect(startConversion('Hexadecimal', 'Octal', '-FA')).toBe('-372');
    expect(startConversion('Hexadecimal', 'Octal', '0')).toBe('0');
});

/**
 * Test decimal conversions
 */

// Binary to decimal
test('Binary to Decimal', () => {
    expect(startConversion('Binary', 'Decimal', '11100')).toBe('28');
    expect(startConversion('Binary', 'Decimal', '-10001')).toBe('-17');
    expect(startConversion('Binary', 'Decimal', '0')).toBe('0');
});
// Octal to decimal
test('Octal to Decimal', () => {
    expect(startConversion('Octal', 'Decimal', '34')).toBe('28');
    expect(startConversion('Octal', 'Decimal', '-21')).toBe('-17');
    expect(startConversion('Octal', 'Decimal', '0')).toBe('0');
});
// Hexadecimal to decimal
test('Hexadecimal to Decimal', () => {
    expect(startConversion('Hexadecimal', 'Decimal', '1A')).toBe('26');
    expect(startConversion('Hexadecimal', 'Decimal', '-FA')).toBe('-250');
    expect(startConversion('Hexadecimal', 'Decimal', '0')).toBe('0');
});

/**
 * Test hexadecimal conversions
 */

// Binary to hexadecimal
test('Binary to Hexadecimal', () => {
    expect(startConversion('Binary', 'Hexadecimal', '11100')).toBe('1C');
    expect(startConversion('Binary', 'Hexadecimal', '-10001')).toBe('-11');
    expect(startConversion('Binary', 'Hexadecimal', '0')).toBe('0');
});
// Octal to hexadecimal
test('Octal to Hexadecimal', () => {
    expect(startConversion('Octal', 'Hexadecimal', '34')).toBe('1C');
    expect(startConversion('Octal', 'Hexadecimal', '-21')).toBe('-11');
    expect(startConversion('Octal', 'Hexadecimal', '0')).toBe('0');
});
// Decimal to hexadecimal
test('Decimal to Hexadecimal', () => {
    expect(startConversion('Decimal', 'Hexadecimal', '73')).toBe('49');
    expect(startConversion('Decimal', 'Hexadecimal', '-31')).toBe('-1F');
    expect(startConversion('Decimal', 'Hexadecimal', '0')).toBe('0');
});

/**
 * Test invalid conversions
 */

test('Invalid Binary', () => {
    expect(startConversion('Binary', 'Decimal', '2')).toBe('Invalid input!');
});
test('Invalid Octal', () => {
    expect(startConversion('Octal', 'Decimal', '8')).toBe('Invalid input!');
});
test('Invalid Decimal', () => {
    expect(startConversion('Decimal', 'Binary', '2.5')).toBe('Invalid input!');
});
test('Invalid Hexadecimal', () => {
    expect(startConversion('Hexadecimal', 'Decimal', '1G')).toBe('Invalid input!');
});