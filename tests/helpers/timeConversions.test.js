import { expect, test } from 'vitest'
import { startConversion } from '../../src/helpers/conversions';

const errorMessage = "Invalid!";

/**
 * Test Seconds conversions
 */
test('Minutes to Seconds', () => {
    expect(startConversion('Minutes', 'Seconds', 30, true)).toBe(1800);
    expect(startConversion('Minutes', 'Seconds', -1, true)).toBe(errorMessage);
});

test('Hours to Seconds', () => {
    expect(startConversion('Hours', 'Seconds', 0.3, true)).toBe(1080);
    expect(startConversion('Hours', 'Seconds', -1, true)).toBe(errorMessage);
});

test('Days to Seconds', () => {
    expect(startConversion('Days', 'Seconds', 2, true)).toBe(172800);
    expect(startConversion('Days', 'Seconds', -1, true)).toBe(errorMessage);
});

/**
 * Test Minutes conversions
 */
test('Seconds to Minutes', () => {
    expect(startConversion('Seconds', 'Minutes', 45, true)).toBe(0.75);
    expect(startConversion('Seconds', 'Minutes', -1, true)).toBe(errorMessage);
});

test('Hours to Minutes', () => {
    expect(startConversion('Hours', 'Minutes', 3, true)).toBe(180);
    expect(startConversion('Hours', 'Minutes', -1, true)).toBe(errorMessage);
});

test('Days to Minutes', () => {
    expect(startConversion('Days', 'Minutes', 2.3, true)).toBe(3312);
    expect(startConversion('Days', 'Minutes', -1, true)).toBe(errorMessage);
});

/**
 * Test Hours conversions
 */
test('Seconds to Hours', () => {
    expect(startConversion('Seconds', 'Hours', 10800, true)).toBe(3);
    expect(startConversion('Seconds', 'Hours', -1, true)).toBe(errorMessage);
});

test('Minutes to Hours', () => {
    expect(startConversion('Minutes', 'Hours', 600, true)).toBe(10);
    expect(startConversion('Minutes', 'Hours', -1, true)).toBe(errorMessage);
});

test('Days to Hours', () => {
    expect(startConversion('Days', 'Hours', 1.1, true)).toBe(26.4);
    expect(startConversion('Days', 'Hours', -1, true)).toBe(errorMessage);
});

/**
 * Test Days conversions
 */
test('Seconds to Days', () => {
    expect(startConversion('Seconds', 'Days', 216000, true)).toBe(2.5);
    expect(startConversion('Seconds', 'Days', -1, true)).toBe(errorMessage);
});

test('Minutes to Days', () => {
    expect(startConversion('Minutes', 'Days', 2160, true)).toBe(1.5);
    expect(startConversion('Minutes', 'Days', -1, true)).toBe(errorMessage);
})

test('Hours to Days', () => {
    expect(startConversion('Hours', 'Days', 120, true)).toBe(5);
    expect(startConversion('Hours', 'Days', -1, true)).toBe(errorMessage);
});