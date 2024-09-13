/*
    This file will contain reusable functions that can be used across the multiple tests
*/

export function generateRandom6DigitNumber(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
}