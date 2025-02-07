export type UnitType = 'meters' | 'kilometers' | 'miles' | 'feet' | 'inches';

export const conversionFactors: { [key in UnitType]: number } = {
    meters: 1,
    kilometers: 1000,
    miles: 1609.34,
    feet: 0.3048,
    inches: 0.0254,
};

export function convertLength(value: number, fromUnit: UnitType, toUnit: UnitType): number {
    const valueInMeters = value * conversionFactors[fromUnit];
    const convertedValue = valueInMeters / conversionFactors[toUnit];
    return convertedValue;
}