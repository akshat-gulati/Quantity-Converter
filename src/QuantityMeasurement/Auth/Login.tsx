import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const Login = () => {
    const [phone, setPhone] = useState('');
    const [boole, setBoole] = useState(true);

    return (
        <SafeAreaView style={styles.SafeArea} >
            <View style={styles.container}>
            <Image style={styles.bgImage} source={require('../../Assets/Login.jpg')}/>
            <View style={styles.overlay}>
                <View style={styles.titleSection}>
                    <Text style={styles.titleText}>Login & Signup</Text>
                </View>
                <View style={styles.authView}>
                    <View style={styles.inputSectionEach}>
                        <Text style={styles.text}>Enter Your Phone</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Phone Number"
                            keyboardType="numeric"
                            value={phone}
                            onChangeText={setPhone}
                        />
                    </View>
                    {boole && (
                        <View style={styles.inputSectionEach}>
                            <Text style={styles.text}>Enter Your Password</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Password"
                                secureTextEntry
                            />
                        </View>
                    )}
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            </View>
        </SafeAreaView>
    );
};

export default Login;

const styles = StyleSheet.create({
    SafeArea:{
        flex:1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgImage: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        opacity:0.2
        
    },
    overlay: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        // backgroundColor:'#ffffff90',
        // borderWidth: 1,
        borderRadius:15,
        
        

    },
    titleSection: {
        marginBottom: 40,
        alignItems: 'center',

    },
    titleText: {
        fontSize: 34,
        color: 'black',
    },
    authView: {
        padding: 20,
        width: '100%',
        alignItems: 'center',
    },
    inputSectionEach: {
        width: '100%',
        marginBottom: 20,
    },
    text: {
        marginLeft: 10,
        marginBottom: 5,
        color: 'black',
        fontSize:15
    },
    input: {
        paddingHorizontal: 10,
        borderWidth: 1,
        height: 40,
        borderRadius: 15,
        backgroundColor: '#fff',
    },
    button: {
        borderWidth: 1,
        borderRadius: 15,
        width: '60%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'pink',
    },
    buttonText: {
        color: 'black',
    },
});