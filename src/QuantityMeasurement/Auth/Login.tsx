import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'


const Login = () => {
    const [phone, setphone] = useState('')
    const [boole, setboole] = useState(true)


    return (
        <SafeAreaView style={styles.container}>
            <Text>Login & Signup</Text>


            <View style={styles.authView}>
                <View style={styles.inputSectionEach}>
                    <Text>Enter Your username</Text>
                    <TextInput style={styles.input} placeholder="Enter value" keyboardType="numeric" value={phone} onChangeText={setphone} />
                </View>

                {boole && (
                    <View style={styles.inputSectionEach}>
                        <Text>Enter Your Password</Text>
                        <TextInput style={styles.input} placeholder="Enter value" keyboardType="numeric" value={phone} onChangeText={setphone} />
                    </View>
                )}

            </View>

        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:"red"

    },
    authView: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap:20
        // backgroundColor:'red'
    },
    inputSectionEach: {
        width: "100%",


    },
    input: {
        paddingHorizontal: 10,
        borderWidth: 1,
        height: 40,
        borderRadius: 15

    }
})