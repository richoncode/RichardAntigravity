/**
 * Calculates the "slushiness" potential of a mixture.
 * 
 * Guidelines:
 * - Sugar (Brix): Ideal 13-15%. Min 4%. Max 18%.
 * - Alcohol (ABV): Ideal 2.8-8%. Max ~16%.
 * 
 * @param {number} volumeOz - Total volume in ounces
 * @param {number} sugarGrams - Total sugar in grams
 * @param {number} alcoholOz - Volume of alcohol (spirit) in ounces
 * @param {number} alcoholABV - ABV of the spirit (e.g., 40 for 40%)
 * @returns {object} Result object with brix, abv, status, and message
 */
export function calculateSlushiness(volumeOz, sugarGrams, alcoholOz = 0, alcoholABV = 0) {
    // Convert volume to grams (approximate 1oz = 29.57ml ~ 29.57g for water-based)
    // This is a rough approximation, but sufficient for home slushies.
    const volumeGrams = volumeOz * 29.57;

    // Calculate Brix (Sugar %)
    // Brix = (Mass of Sugar / Total Mass) * 100
    // Total Mass = Liquid Mass + Sugar Mass (roughly, though volume increases)
    // Let's simplify: Brix ~ (Sugar Grams / (Liquid Grams + Sugar Grams)) * 100
    const totalMass = volumeGrams + sugarGrams;
    const brix = (sugarGrams / totalMass) * 100;

    // Calculate Final ABV
    // Alcohol Volume = alcoholOz * (alcoholABV / 100)
    // Total Volume = volumeOz (assuming alcohol is part of the total liquid input)
    // Note: If alcoholOz is separate from volumeOz, we should add them. 
    // Let's assume volumeOz INCLUDES the alcohol.
    const pureAlcoholOz = alcoholOz * (alcoholABV / 100);
    const finalABV = (pureAlcoholOz / volumeOz) * 100;

    let status = "PERFECT";
    let message = "This mix should slush perfectly!";
    let color = "green";

    // Evaluate Brix
    if (brix < 4) {
        status = "ICE_BLOCK";
        message = "Not enough sugar! It will freeze into a solid block.";
        color = "red";
    } else if (brix < 12) {
        status = "ICY";
        message = "A bit low on sugar. Might be icy/crunchy.";
        color = "yellow";
    } else if (brix > 18) {
        status = "SOFT";
        message = "High sugar content. Might be soft or runny.";
        color = "yellow";
    }

    // Evaluate Alcohol (Overrides sugar if critical)
    if (finalABV > 16) {
        status = "NO_FREEZE";
        message = "Too much alcohol! It won't freeze.";
        color = "red";
    } else if (finalABV > 10) {
        status = "SOFT_ALCOHOL";
        message = "High alcohol. Will be very soft/wet. Use coldest setting.";
        color = "orange";
    }

    return {
        brix: parseFloat(brix.toFixed(1)),
        abv: parseFloat(finalABV.toFixed(1)),
        status,
        message,
        color
    };
}
