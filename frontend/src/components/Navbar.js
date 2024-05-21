import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../../axios/axios';

const Navbar = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {

        const tokenPromise = AsyncStorage.getItem('token');
        const token = await tokenPromise;
        
        if(token){
          var config = {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        }

        const response = await axios.get('https://passwordgenerate.pythonanywhere.com/accounts/logout/', config);
        await AsyncStorage.removeItem('token');
        console.log(response.data);

        navigation.navigate('SignIn');
    } catch (error) {
        console.error('Error:', error);
        setError('Registration failed. Please try again.');
    }
};
  
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Apps</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create App</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GeneratePassword')} >
          <Text style={styles.buttonText}>Generate Password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout} style={styles.button}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 10,
    borderBottomWidth : 1 ,
    borderBottomColor: 'gray',
    marginTop: 30,
  },

  buttonText: {
    paddingVertical: 8,
    paddingHorizontal : 2,
    fontSize: 15,
    fontWeight: 'bold',
    color : '#344340',
  },
};

export default Navbar;