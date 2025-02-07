type WeightUnit = 'grams' | 'kilograms' | 'pounds' | 'ounces';

export const conversionFactors: { [key in WeightUnit]: number } = {
    grams: 1,
    kilograms: 1000,
    pounds: 453.592,
    ounces: 28.3495,
};

function convertWeight(value: number, fromUnit: WeightUnit, toUnit: WeightUnit): number {
    const valueInGrams = value * conversionFactors[fromUnit];
    const convertedValue = valueInGrams / conversionFactors[toUnit];
    return convertedValue;
}

const weightInKilograms = convertWeight(10, 'pounds', 'kilograms');
console.log(weightInKilograms);