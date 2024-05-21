import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TextInput } from "react-native";
import axios from '../../axios/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigation = useNavigation()

    const handleSignUp = async () => {
        try {
            // Validar las contraseñas
            if (password !== confirmPassword) {
                setError('Passwords do not match');
                return;
            }
    
            // Realizar la solicitud de registro
            const response = await axios.post('https://passwordgenerate.pythonanywhere.com/accounts/register/', {
                email: email,
                password: password,
                confirm_password : confirmPassword,
            });

            const { token } = response.data;
            await AsyncStorage.setItem('token', token),
            navigation.navigate('Home');
        } catch (error) {
            console.error('Error:', error);
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.subTitle}>Create new account</Text>
            <TextInput
                style={styles.textInput}
                placeholder="example@gmail.com"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                secureTextEntry={true}
                style={styles.textInput}
                placeholder="password"
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                secureTextEntry={true}
                style={styles.textInput}
                placeholder="confirm password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <TouchableOpacity onPress={handleSignUp} style={styles.containerButton}>
            <LinearGradient
                style={styles.button}
                colors={['#4c669f', '#3b5998', '#192f6a']}
                start={{x: 1, y:0}}
                end={{x : 0, y : 1}}
            >
                <Text style={styles.textButton}>Register</Text>
            </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                <Text style={styles.textLink}>You already have an account?</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#f1f1f1',
        alignItems : 'center',
        justifyContent : 'center',
    },

    title : {
        fontSize : 70,
        color : "#344340",
        fontWeight : 'bold',
    },

    subTitle : {
        fontSize : 20,
        color : 'gray',
    },

    textLink : {
        color : 'gray',
        marginTop: 10,
    },

    textInput : {
        borderRadius : 10,
        paddingStart : 30,
        borderColor : '#eee',
        padding : 10,
        width : '80%',
        height :  50,
        marginTop : 20,
        backgroundColor : '#fff',
    },

    containerButton: {
        width: '80%',
    },

   textButton: {
    fontSize : 20,
    color: '#eee',
    fontWeight : 'bold',
   },

   button : {
    marginTop: 20,
    height: 50,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent : 'center',
   },
});

export default SignUp;