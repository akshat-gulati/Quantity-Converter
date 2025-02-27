import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { sharedStyles } from '../styles/sharedStyles';

type UnitPickerProps = {
  selectedValue: string;
  units: Array<{ label: string; value: string }>;
  onValueChange: (itemValue: string) => void;
};

const UnitPicker = ({ selectedValue, units, onValueChange }: UnitPickerProps) => (
  <Picker
    selectedValue={selectedValue}
    style={sharedStyles.picker}
    onValueChange={onValueChange}
  >
    {units.map((unit) => (
      <Picker.Item
        key={unit.value}
        label={unit.label}
        value={unit.value}
      />
    ))}
  </Picker>
);

export default UnitPicker;
