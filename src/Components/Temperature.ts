export type UnitType = 'Celsius' | 'Fahrenheit' | 'Kelvin';

export function convertTemperature(value: number, fromUnit: UnitType, toUnit: UnitType): number {
    if (fromUnit === toUnit) {
        return value;
    }

    let valueInCelsius: number;

    if (fromUnit === 'Celsius') {
        valueInCelsius = value;
    } else if (fromUnit === 'Fahrenheit') {
        valueInCelsius = (value - 32) * 5 / 9;
    } else if (fromUnit === 'Kelvin') {
        valueInCelsius = value - 273.15;
    } else {
        throw new Error('Unsupported temperature unit');
    }

    if (toUnit === 'Celsius') {
        return valueInCelsius;
    } else if (toUnit === 'Fahrenheit') {
        return valueInCelsius * 9 / 5 + 32;
    } else if (toUnit === 'Kelvin') {
        return valueInCelsius + 273.15;
    } else {
        throw new Error('Unsupported temperature unit');
    }
}