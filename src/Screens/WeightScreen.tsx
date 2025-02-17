import React, { useState } from 'react';
import { Text, View } from 'react-native';
import ScreenLayout from '../Components/ScreenLayout';
import UnitPicker from '../Components/UnitPicker';
import ClearableInput from '../Components/ClearableInput';
import ConvertButton from '../Components/ConvertButton';
import ResultDisplay from '../Components/ResultDisplay';
import { WeightUnit, conversionFactors, convertWeight } from '../Components/Weights';
import { sharedStyles } from '../styles/sharedStyles';


const WeightScreen = () => {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState<WeightUnit>('grams');
  const [toUnit, setToUnit] = useState<WeightUnit>('grams');
  const [result, setResult] = useState<number | null>(null);

  const handleConvert = () => {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      const convertedValue = convertWeight(numericValue, fromUnit, toUnit);
      setResult(convertedValue);
    } else {
      setResult(null);
    }
  };

  const units = [
    { label: 'Grams', value: 'grams' },
    { label: 'Kilograms', value: 'kilograms' },
    { label: 'Pounds', value: 'pounds' },
    { label: 'Ounces', value: 'ounces' },

  ];

  return (
    <ScreenLayout
      title="Length Converter"
      backgroundImage={require('../Assets/length.jpg')}
    >
      <View style={sharedStyles.pickerView}>
        <View style={sharedStyles.eachPicker}>
          <Text style={sharedStyles.label}>Convert From</Text>
          <UnitPicker
            selectedValue={fromUnit}
            units={units}
            onValueChange={(value) => setFromUnit(value as WeightUnit)}
          />
        </View>
        <View style={sharedStyles.eachPicker}>
          <Text style={sharedStyles.label}>Convert To</Text>
          <UnitPicker
            selectedValue={toUnit}
            units={units}
            onValueChange={(value) => setToUnit(value as WeightUnit)}
          />
        </View>
      </View>
      <ClearableInput
        value={value}
        onChangeText={setValue}
        onClear={() => {
          setValue('');
          setResult(null);
        }}
        placeholder="Enter value"
      />
      <ConvertButton onPress={handleConvert} />
      <ResultDisplay result={result} toUnit={toUnit} />
    </ScreenLayout>
  );};

export default WeightScreen;
