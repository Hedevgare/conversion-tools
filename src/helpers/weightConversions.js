/**
 * Grams conversions
 */
export function kilogramsToGrams(kilograms) {
    return kilograms * 1000;
}
export function poundsToGrams(pounds) {
    return pounds * 453.59237;
}

/**
 * Kilograms conversions
 */
export function gramsToKilograms(grams) {
    return grams / 1000;
}
export function poundsToKilograms(pounds) {
    return gramsToKilograms(poundsToGrams(pounds));
}

/**
 * Pounds conversions
 */
export function gramsToPounds(grams) {
    return grams / 453.59237;
}
export function kilogramsToPounds(kilograms) {
    return gramsToPounds(kilogramsToGrams(kilograms));
}