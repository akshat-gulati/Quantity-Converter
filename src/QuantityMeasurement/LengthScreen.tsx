import React, { useState } from 'react';
import { Text, View } from 'react-native';
import ScreenLayout from '../Components/ScreenLayout';
import UnitPicker from '../Components/UnitPicker';
import ClearableInput from '../Components/ClearableInput';
import ConvertButton from '../Components/ConvertButton';
import ResultDisplay from '../Components/ResultDisplay';
import { UnitType, convertLength } from '../Components/Lengths';
import { sharedStyles } from '../styles/sharedStyles';

const LengthScreen = () => {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState<UnitType>('meters');
  const [toUnit, setToUnit] = useState<UnitType>('meters');
  const [result, setResult] = useState<number | null>(null);

  const handleConvert = () => {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      setResult(convertLength(numericValue, fromUnit, toUnit));
    } else {
      setResult(null);
    }
  };

  const units = [
    { label: 'Meters', value: 'meters' },
    { label: 'Kilometers', value: 'kilometers' },
    { label: 'Miles', value: 'miles' },
    { label: 'Feet', value: 'feet' },
    { label: 'Inches', value: 'inches' },
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
            onValueChange={(value) => setFromUnit(value as UnitType)}
          />
        </View>
        <View style={sharedStyles.eachPicker}>
          <Text style={sharedStyles.label}>Convert To</Text>
          <UnitPicker
            selectedValue={toUnit}
            units={units}
            onValueChange={(value) => setToUnit(value as UnitType)}
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
  );
};

export default LengthScreen;