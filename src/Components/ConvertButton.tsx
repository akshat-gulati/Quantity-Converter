import React from 'react';
import { Text } from 'react-native';
import { sharedStyles } from '../styles/sharedStyles';

type ConvertButtonProps = {
  onPress: () => void;
};

const ConvertButton = ({ onPress }: ConvertButtonProps) => (
  <Text style={sharedStyles.button} onPress={onPress}>
    Convert
  </Text>
);

export default ConvertButton;