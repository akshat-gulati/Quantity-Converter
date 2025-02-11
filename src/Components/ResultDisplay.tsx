import React from 'react';
import { Text } from 'react-native';
import { sharedStyles } from '../styles/sharedStyles';

type ResultDisplayProps = {
  result: number | null;
  toUnit: string;
};

const ResultDisplay = ({ result, toUnit }: ResultDisplayProps) => {
  if (result === null) return null;
  return (
    <Text style={sharedStyles.result}>
      Result: {result.toFixed(2)} {toUnit}
    </Text>
  );
};

export default ResultDisplay;