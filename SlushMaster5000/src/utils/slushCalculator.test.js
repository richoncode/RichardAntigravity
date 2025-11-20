import { describe, it, expect } from 'vitest';
import { calculateSlushiness } from './slushCalculator';

describe('slushCalculator', () => {
    it('should identify perfect slush conditions', () => {
        // 24oz liquid, 100g sugar (approx 14% Brix)
        const result = calculateSlushiness(24, 100);
        expect(result.status).toBe('PERFECT');
        expect(result.color).toBe('green');
    });

    it('should warn if sugar is too low (Ice Block)', () => {
        // 24oz liquid, 10g sugar (very low Brix)
        const result = calculateSlushiness(24, 10);
        expect(result.status).toBe('ICE_BLOCK');
        expect(result.color).toBe('red');
    });

    it('should warn if alcohol is too high', () => {
        // 24oz liquid, 100g sugar, but 10oz of 40% ABV spirit
        // Total volume 24oz. Alcohol = 10oz * 0.4 = 4oz pure alcohol.
        // ABV = 4 / 24 = 16.6% -> Too high
        const result = calculateSlushiness(24, 100, 10, 40);
        expect(result.status).toBe('NO_FREEZE');
    });

    it('should handle standard margarita ratio', () => {
        // 4oz Tequila (40%), 20oz Mix. Total 24oz.
        // Alcohol = 1.6oz. ABV = 1.6/24 = 6.6% -> Perfect
        // Assume mix has sugar.
        const result = calculateSlushiness(24, 100, 4, 40);
        expect(result.abv).toBeCloseTo(6.7, 1);
        expect(result.status).toBe('PERFECT');
    });
});
