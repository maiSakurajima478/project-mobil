import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';
import generatePassword from '../js/generator_password';
import CustomNavbar from './CustomNavbar';

const Main = () => {
    const [myPassword, setMyPassword] = useState('My password');

    function handleGeneratePassword() {
      const newPassword = generatePassword(12, true, true, true);
      setMyPassword(newPassword);
    }

    const leftButton = { text: 'Apps' };
    const rightButton = { text: 'Generate Password' };

  return (
    <View style={styles.container}>
        <View style={styles.navbarContainer}>
            <CustomNavbar
                style={styles.navbarContainer}
                title="Icon"
                leftButton={leftButton}
                rightButton={rightButton}
            />
        </View>
        <View style={styles.container}>
            <Text style={styles.text}>{myPassword}</Text>
        
            <TouchableNativeFeedback onPress={handleGeneratePassword}>
                <Text style={styles.button}>Generar Password</Text>
            </TouchableNativeFeedback>
        </View>
      
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text :{
    fontSize: 40,
    color: '#240750'
  },

  button: {
    marginTop: 10,
    backgroundColor: '#240750',
    paddingHorizontal: 14,
    paddingVertical: 4,
    color: '#fff',
    borderRadius: 4,
    fontSize: 20
  },

  navbarContainer: {
    marginTop: 10
  },

});

export default Main;
