import React from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import { sharedStyles } from '../styles/sharedStyles';

type ClearableInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  onClear: () => void;
  placeholder?: string;
};

const ClearableInput = ({ value, onChangeText, onClear, placeholder }: ClearableInputProps) => (
  <View style={sharedStyles.inputContainer}>
    <TextInput
      style={sharedStyles.input}
      placeholder={placeholder}
      keyboardType="numeric"
      value={value}
      onChangeText={onChangeText}
    />
    <TouchableOpacity onPress={onClear}>
      <Image
        style={sharedStyles.clearIcon}
        source={require('../Assets/x.circle.fill.png')}
      />
    </TouchableOpacity>
  </View>
);

export default ClearableInput;