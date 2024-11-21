/**
 * Seconds conversions
 */
export function minutesToSeconds(minutes) {
  return minutes * 60;
}

export function hoursToSeconds(hours) {
  return hours * 60 * 60;
}

export function daysToSeconds(days) {
    return days * 24 * 60 * 60;
}

/**
 * Minutes conversions
 */
export function secondsToMinutes(seconds) {
    return seconds / 60;
}

export function hoursToMinutes(hours) {
    return hours * 60;
}

export function daysToMinutes(days) {
    return days * 24 * 60;
}

/**
 * Hours conversions
 */

export function secondsToHours(seconds) {
    return seconds / 60 / 60;
}

export function minutesToHours(minutes) {
    return minutes / 60;
}

export function daysToHours(days) {
    return days * 24;
}

/**
 * Days conversions
 */

export function secondsToDays(seconds) {
    return seconds / 24 / 60 / 60;
}

export function minutesToDays(minutes) {
    return minutes / 24 / 60;
}

export function hoursToDays(hours) {
    return hours / 24;
}