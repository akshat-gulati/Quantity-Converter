import { Alert, Button, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Login = ({ route }) => {
    const [usernamex, setUsernamex] = useState('');
    const [password, setPassword] = useState('');
    const { username, setUsername } = route.params;
    const [isRegistered, setIsRegistered] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        const checkUsernamex = async () => {
            const storedPassword = await AsyncStorage.getItem(usernamex);
            if (storedPassword) {
                setIsRegistered(true);
            } else {
                setIsRegistered(false);
            }
        };

        if (usernamex) {
            checkUsernamex();
        }
    }, [usernamex]);

    const handleLogin = async () => {
        if (isRegistered) {
            const storedPassword = await AsyncStorage.getItem(usernamex);
            if (storedPassword === password) {
                setUsername(usernamex); // Set the correct username
                navigation.navigate('Home');
            } else {
                Alert.alert('Incorrect password');
            }
        } else {
            await AsyncStorage.setItem(usernamex, password);
            Alert.alert(`Hi ${usernamex}`);
        }
    };

    return (
        <SafeAreaView style={styles.SafeArea}>
            <View style={styles.container}>
                <Image style={styles.bgImage} source={require('../../Assets/Login.jpg')} />
                <View style={styles.overlay}>
                    <View style={styles.titleSection}>
                        <Text style={styles.titleText}>Login & Signup</Text>
                    </View>
                    <View style={styles.authView}>
                        <View style={styles.inputSectionEach}>
                            <Text style={styles.text}>Enter Your Username</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your Username"
                                value={usernamex}
                                onChangeText={setUsernamex}
                            />
                        </View>

                        <View style={styles.inputSectionEach}>
                            <Text style={styles.text}>Enter Your Password</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Password"
                                secureTextEntry
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>

                        <TouchableOpacity style={styles.button} onPress={handleLogin}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;

const styles = StyleSheet.create({
    SafeArea: {
        flex: 1
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
        opacity: 0.2
    },
    overlay: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderRadius: 15,
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
        fontSize: 15
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
    },
    buttonText: {
        color: 'black',
    },
});