import { expect, test } from 'vitest'
import { startConvertion } from '../../src/helpers/conversions';

/**
 * Test binary conversions
 */

// Octal to binary
test('Octal to Binary', () => {
    expect(startConvertion('Octal', 'Binary', '34')).toBe('11100');
    expect(startConvertion('Octal', 'Binary', '-21')).toBe('-10001');
    expect(startConvertion('Octal', 'Binary', '0')).toBe('0');
});
// Decimal to binary
test('Decimal to Binary', () => {
    expect(startConvertion('Decimal', 'Binary', '73')).toBe('1001001');
    expect(startConvertion('Decimal', 'Binary', '-31')).toBe('-11111');
    expect(startConvertion('Decimal', 'Binary', '0')).toBe('0');
});
// Hexadecimal to binary
test('Hexadecimal to Binary', () => {
    expect(startConvertion('Hexadecimal', 'Binary', '1A')).toBe('11010');
    expect(startConvertion('Hexadecimal', 'Binary', '-FA')).toBe('-11111010');
    expect(startConvertion('Hexadecimal', 'Binary', '0')).toBe('0');
});

/**
 * Test octal conversions
 */

// Binary to octal
test('Binary to Octal', () => {
    expect(startConvertion('Binary', 'Octal', '11100')).toBe('34');
    expect(startConvertion('Binary', 'Octal', '-10001')).toBe('-21');
    expect(startConvertion('Binary', 'Octal', '0')).toBe('0');
});
// Decimal to octal
test('Decimal to Octal', () => {
    expect(startConvertion('Decimal', 'Octal', '73')).toBe('111');
    expect(startConvertion('Decimal', 'Octal', '-31')).toBe('-37');
    expect(startConvertion('Decimal', 'Octal', '0')).toBe('0');
});
// Hexadecimal to octal
test('Hexadecimal to Octal', () => {
    expect(startConvertion('Hexadecimal', 'Octal', '1A')).toBe('32');
    expect(startConvertion('Hexadecimal', 'Octal', '-FA')).toBe('-372');
    expect(startConvertion('Hexadecimal', 'Octal', '0')).toBe('0');
});

/**
 * Test decimal conversions
 */

// Binary to decimal
test('Binary to Decimal', () => {
    expect(startConvertion('Binary', 'Decimal', '11100')).toBe('28');
    expect(startConvertion('Binary', 'Decimal', '-10001')).toBe('-17');
    expect(startConvertion('Binary', 'Decimal', '0')).toBe('0');
});
// Octal to decimal
test('Octal to Decimal', () => {
    expect(startConvertion('Octal', 'Decimal', '34')).toBe('28');
    expect(startConvertion('Octal', 'Decimal', '-21')).toBe('-17');
    expect(startConvertion('Octal', 'Decimal', '0')).toBe('0');
});
// Hexadecimal to decimal
test('Hexadecimal to Decimal', () => {
    expect(startConvertion('Hexadecimal', 'Decimal', '1A')).toBe('26');
    expect(startConvertion('Hexadecimal', 'Decimal', '-FA')).toBe('-250');
    expect(startConvertion('Hexadecimal', 'Decimal', '0')).toBe('0');
});

/**
 * Test hexadecimal conversions
 */

// Binary to hexadecimal
test('Binary to Hexadecimal', () => {
    expect(startConvertion('Binary', 'Hexadecimal', '11100')).toBe('1C');
    expect(startConvertion('Binary', 'Hexadecimal', '-10001')).toBe('-11');
    expect(startConvertion('Binary', 'Hexadecimal', '0')).toBe('0');
});
// Octal to hexadecimal
test('Octal to Hexadecimal', () => {
    expect(startConvertion('Octal', 'Hexadecimal', '34')).toBe('1C');
    expect(startConvertion('Octal', 'Hexadecimal', '-21')).toBe('-11');
    expect(startConvertion('Octal', 'Hexadecimal', '0')).toBe('0');
});
// Decimal to hexadecimal
test('Decimal to Hexadecimal', () => {
    expect(startConvertion('Decimal', 'Hexadecimal', '73')).toBe('49');
    expect(startConvertion('Decimal', 'Hexadecimal', '-31')).toBe('-1F');
    expect(startConvertion('Decimal', 'Hexadecimal', '0')).toBe('0');
});

/**
 * Test invalid conversions
 */

test('Invalid Binary', () => {
    expect(startConvertion('Binary', 'Decimal', '2')).toBe('Invalid input!');
});
test('Invalid Octal', () => {
    expect(startConvertion('Octal', 'Decimal', '8')).toBe('Invalid input!');
});
test('Invalid Decimal', () => {
    expect(startConvertion('Decimal', 'Binary', '2.5')).toBe('Invalid input!');
});
test('Invalid Hexadecimal', () => {
    expect(startConvertion('Hexadecimal', 'Decimal', '1G')).toBe('Invalid input!');
});