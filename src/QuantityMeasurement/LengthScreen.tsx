import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Keyboard, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { UnitType, conversionFactors, convertLength } from '../Components/Lengths';

const { width, height } = Dimensions.get('window');
const LengthScreen = () => {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState<UnitType>('meters');
  const [toUnit, setToUnit] = useState<UnitType>('meters');
  const [result, setResult] = useState<number | null>(null);

  const handleConvert = () => {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      const convertedValue = convertLength(numericValue, fromUnit, toUnit);
      setResult(convertedValue);
    } else {
      setResult(null);
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <Image style={{ position: 'absolute', opacity: 0.1 }} source={require('../Assets/length.jpg')} />
      <Text style={styles.title}>Length Converter</Text>
      <View style={styles.pickerView}>
        <View style={styles.eachPicker}>
          <Text style={{ fontSize: width * 0.045, color: 'grey' }}>Convert From</Text>
          <Picker selectedValue={fromUnit} style={styles.picker} onValueChange={(itemValue: UnitType) => setFromUnit(itemValue)}>
            <Picker.Item label="Meters" value="meters" />
            <Picker.Item label="Kilometers" value="kilometers" />
            <Picker.Item label="Miles" value="miles" />
            <Picker.Item label="Feet" value="feet" />
            <Picker.Item label="Inches" value="inches" />
          </Picker>
        </View>
        <View style={styles.eachPicker}>
          <Text style={{ fontSize: width * 0.045, color: 'grey' }}>Convert To</Text>
          <Picker selectedValue={toUnit} style={styles.picker} onValueChange={(itemValue: UnitType) => setToUnit(itemValue)}>
            <Picker.Item label="Meters" value="meters" />
            <Picker.Item label="Kilometers" value="kilometers" />
            <Picker.Item label="Miles" value="miles" />
            <Picker.Item label="Feet" value="feet" />
            <Picker.Item label="Inches" value="inches" />
          </Picker>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter value" keyboardType="numeric" value={value} onChangeText={setValue} />
        <TouchableOpacity onPress={() => { setValue(''); setResult(null); }}>
          <Image style={styles.clearIcon} source={require('../Assets/x.circle.fill.png')} />
        </TouchableOpacity>
      </View>
      <Text style={styles.button} onPress={() => { handleConvert() }}>Convert</Text>
      {result !== null && (
        <Text style={styles.result}>Result: {result.toFixed(2)} {toUnit}</Text>
      )}
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  title: {
    fontSize: width * 0.068, // ~30px on 440px width
    marginVertical: height * 0.031 // ~30px on 956px height
  },
  input: {
    backgroundColor: "#ffffff80",
    height: height * 0.052, // ~50px
    width: width * 0.795, // ~350px
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: width * 0.045, // ~20px
    paddingHorizontal: width * 0.018, // ~8px
    paddingVertical: height * 0.01 // ~10px
  },
  picker: {
    height: height * 0.105, // ~100px
    width: width * 0.455, // ~200px
    marginBottom: height * 0.105 // ~100px
  },
  eachPicker: {
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#ffffff80',
    borderRadius: width * 0.045, // ~20px
    height: height * 0.261, // ~250px
    paddingVertical: height * 0.01 // ~10px
  },
  button: {
    padding: height * 0.007, // ~7px
    marginTop: height * 0.031, // ~30px
    fontSize: width * 0.05, // ~22px
    color: 'blue',
    textAlign: 'center',
    marginBottom: height * 0.017, // ~16px
    borderWidth: 1,
    width: width * 0.909, // ~400px
    height: height * 0.042, // ~40px
    backgroundColor: '#ffffff80',
    borderRadius: width * 0.045 // ~20px
  },
  result: {
    fontSize: width * 0.041, // ~18px
    textAlign: 'center',
    marginTop: height * 0.017 // ~16px
  },
  pickerView: {
    flexDirection: 'row',
    gap: width * 0.023 // ~10px
  },
  inputContainer: {
    marginTop: height * 0.021, // ~20px
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-evenly'
  },
  clearIcon: {
    height: width * 0.068, // ~30px
    width: width * 0.068, // ~30px
    objectFit: 'cover',
    tintColor: 'blue'
  }
});

export default LengthScreen;