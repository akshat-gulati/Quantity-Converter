import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import LengthScreen from './LengthScreen'
import { useNavigation } from '@react-navigation/native'

const QuantityHome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
    <Image style={styles.bgImage} source={require('../Assets/project.jpg')} />
    <View style={styles.container}>
      <Text style={styles.textStyle} onPress={()=>navigation.navigate("LengthScreen")}> Length </Text>
      <Text style={styles.textStyle}>Weight</Text>
      <Text style={styles.textStyle}>Temperature</Text>
    </View>
    </View>
  )
}

export default QuantityHome

const styles = StyleSheet.create({
    mainContainer:{
        // flex:1,
        height: '100%',
        width:'100%',
        position:'relative'
        
    },
    bgImage:{
        opacity: 0.15,
        position:'absolute'

    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    textStyle:{
        color:'black',
        fontSize: 30,
        borderWidth:3,
        borderColor: 'white',
        borderRadius:20,
        marginBottom:20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor:'#ffffff90',

    }
})