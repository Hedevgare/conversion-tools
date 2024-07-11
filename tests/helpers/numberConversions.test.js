import { expect, test } from 'vitest'
import { startConvertion } from '../../src/helpers/conversions';

/**
 * Test binary conversions
 */

// Octal to binary
test('Octal to Binary: 34 => 11100', () => {
    expect(startConvertion('Octal', 'Binary', '34')).toBe('11100');
});
test('Octal to Binary: -21 => -10001', () => {
    expect(startConvertion('Octal', 'Binary', '-21')).toBe('-10001');
});
test('Octal to Binary: 0 => 0', () => {
    expect(startConvertion('Octal', 'Binary', '0')).toBe('0');
});
// Decimal to binary
test('Decimal to Binary: 73 => 1001001', () => {
    expect(startConvertion('Decimal', 'Binary', '73')).toBe('1001001');
});
test('Decimal to Binary: -31 => -11111', () => {
    expect(startConvertion('Decimal', 'Binary', '-31')).toBe('-11111');
});
test('Decimal to Binary: 0 => 0', () => {
    expect(startConvertion('Decimal', 'Binary', '0')).toBe('0');
});
// Hexadecimal to binary
test('Hexadecimal to Binary: 1A => 11010', () => {
    expect(startConvertion('Hexadecimal', 'Binary', '1A')).toBe('11010');
});
test('Hexadecimal to Binary: -FA => -11111010', () => {
    expect(startConvertion('Hexadecimal', 'Binary', '-FA')).toBe('-11111010');
});
test('Hexadecimal to Binary: 0 => 0', () => {
    expect(startConvertion('Hexadecimal', 'Binary', '0')).toBe('0');
});

/**
 * Test octal conversions
 */

// Binary to octal
test('Binary to Octal: 11100 => 34', () => {
    expect(startConvertion('Binary', 'Octal', '11100')).toBe('34');
});
test('Binary to Octal: -10001 => -21', () => {
    expect(startConvertion('Binary', 'Octal', '-10001')).toBe('-21');
});
test('Binary to Octal: 0 => 0', () => {
    expect(startConvertion('Binary', 'Octal', '0')).toBe('0');
});
// Decimal to octal
test('Decimal to Octal: 73 => 111', () => {
    expect(startConvertion('Decimal', 'Octal', '73')).toBe('111');
});
test('Decimal to Octal: -31 => -37', () => {
    expect(startConvertion('Decimal', 'Octal', '-31')).toBe('-37');
});
test('Decimal to Octal: 0 => 0', () => {
    expect(startConvertion('Decimal', 'Octal', '0')).toBe('0');
});
// Hexadecimal to octal
test('Hexadecimal to Octal: 1A => 32', () => {
    expect(startConvertion('Hexadecimal', 'Octal', '1A')).toBe('32');
});
test('Hexadecimal to Octal: -FA => -372', () => {
    expect(startConvertion('Hexadecimal', 'Octal', '-FA')).toBe('-372');
});
test('Hexadecimal to Octal: 0 => 0', () => {
    expect(startConvertion('Hexadecimal', 'Octal', '0')).toBe('0');
});

/**
 * Test decimal conversions
 */

// Binary to decimal
test('Binary to Decimal: 11100 => 28', () => {
    expect(startConvertion('Binary', 'Decimal', '11100')).toBe('28');
});
test('Binary to Decimal: -10001 => -17', () => {
    expect(startConvertion('Binary', 'Decimal', '-10001')).toBe('-17');
});
test('Binary to Decimal: 0 => 0', () => {
    expect(startConvertion('Binary', 'Decimal', '0')).toBe('0');
});
// Octal to decimal
test('Octal to Decimal: 34 => 28', () => {
    expect(startConvertion('Octal', 'Decimal', '34')).toBe('28');
});
test('Octal to Decimal: -21 => -17', () => {
    expect(startConvertion('Octal', 'Decimal', '-21')).toBe('-17');
});
test('Octal to Decimal: 0 => 0', () => {
    expect(startConvertion('Octal', 'Decimal', '0')).toBe('0');
});
// Hexadecimal to decimal
test('Hexadecimal to Decimal: 1A => 26', () => {
    expect(startConvertion('Hexadecimal', 'Decimal', '1A')).toBe('26');
});
test('Hexadecimal to Decimal: -FA => -250', () => {
    expect(startConvertion('Hexadecimal', 'Decimal', '-FA')).toBe('-250');
});
test('Hexadecimal to Decimal: 0 => 0', () => {
    expect(startConvertion('Hexadecimal', 'Decimal', '0')).toBe('0');
});

/**
 * Test hexadecimal conversions
 */

// Binary to hexadecimal
test('Binary to Hexadecimal: 11100 => 1C', () => {
    expect(startConvertion('Binary', 'Hexadecimal', '11100')).toBe('1C');
});
test('Binary to Hexadecimal: -10001 => -11', () => {
    expect(startConvertion('Binary', 'Hexadecimal', '-10001')).toBe('-11');
});
test('Binary to Hexadecimal: 0 => 0', () => {
    expect(startConvertion('Binary', 'Hexadecimal', '0')).toBe('0');
});
// Octal to hexadecimal
test('Octal to Hexadecimal: 34 => 1C', () => {
    expect(startConvertion('Octal', 'Hexadecimal', '34')).toBe('1C');
});
test('Octal to Hexadecimal: -21 => -11', () => {
    expect(startConvertion('Octal', 'Hexadecimal', '-21')).toBe('-11');
});
test('Octal to Hexadecimal: 0 => 0', () => {
    expect(startConvertion('Octal', 'Hexadecimal', '0')).toBe('0');
});
// Decimal to hexadecimal
test('Decimal to Hexadecimal: 73 => 49', () => {
    expect(startConvertion('Decimal', 'Hexadecimal', '73')).toBe('49');
});
test('Decimal to Hexadecimal: -31 => -1F', () => {
    expect(startConvertion('Decimal', 'Hexadecimal', '-31')).toBe('-1F');
});
test('Decimal to Hexadecimal: 0 => 0', () => {
    expect(startConvertion('Decimal', 'Hexadecimal', '0')).toBe('0');
});

/**
 * Test invalid conversions
 */

test('Binary to Decimal: 2 => Invalid input!', () => {
    expect(startConvertion('Binary','Decimal','2')).toBe('Invalid input!');
});
test('Octal to Decimal: 8 => Invalid input!', () => {
    expect(startConvertion('Octal', 'Decimal', '8')).toBe('Invalid input!');
});
test('Decimal to Binary: 2.5 => Invalid input!', () => {
    expect(startConvertion('Decimal','Binary','2.5')).toBe('Invalid input!');
});
test('Hexadecimal to Decimal: 1G => Invalid input!', () => {
    expect(startConvertion('Hexadecimal', 'Decimal', '1G')).toBe('Invalid input!');
});