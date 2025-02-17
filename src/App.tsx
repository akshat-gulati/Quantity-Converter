import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Navigation from './Navigation';
import SignUp from './Screens/Auth/SignUp';

const App = () => {
  const [username, setUsername] = useState('')
  return (
    <View style={{ flex: 1 }}>
      <Navigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});