import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Image, Text } from 'react-native';
import { sharedStyles } from '../styles/sharedStyles';

type ScreenLayoutProps = {
  title: string;
  children: React.ReactNode;
  backgroundImage: any;
};

const ScreenLayout = ({ title, children, backgroundImage }: ScreenLayoutProps) => (
  <KeyboardAwareScrollView contentContainerStyle={sharedStyles.container}>
    <Image
      style={{ position: 'absolute', opacity: 0.1 }}
      source={backgroundImage}
    />
    <Text style={sharedStyles.title}>{title}</Text>
    {children}
  </KeyboardAwareScrollView>
);

export default ScreenLayout;