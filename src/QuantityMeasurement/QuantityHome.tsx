import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const QuantityHome = ({ route }) => {
  const navigation = useNavigation();
  const { username } = route.params;

  useEffect(() => {
    const fetchUser = async () => {
      const storedPassword = await AsyncStorage.getItem(username);
    };
    fetchUser();
  }, [username]);

  return (
    <View style={styles.mainContainer}>
      <Image style={styles.bgImage} source={require('../Assets/project.jpg')} />
      <View style={styles.container}>
        <Text style={styles.textStyle}> {username} </Text>
        <Text style={styles.textStyle} onPress={() => navigation.navigate("Length")}> Length </Text>
        <Text onPress={() => navigation.navigate("Weight")} style={styles.textStyle}>Weight</Text>
        <Text onPress={() => navigation.navigate("Temperature")} style={styles.textStyle}>Temperature</Text>
      </View>
    </View>
  );
};

export default QuantityHome;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    position: 'relative'
  },
  bgImage: {
    opacity: 0.15,
    position: 'absolute'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'black',
    fontSize: 30,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff90',
  }
});