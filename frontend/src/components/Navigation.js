import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from '../../screens/Home';
import Register from '../../screens/Register';
import Login from '../../screens/Login';
import GeneratePassword from "../../screens/GeneratePassword";
import { Text, View } from "react-native";

const Stack = createStackNavigator();


const MainStack = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchToken = async () => {
          const token = await AsyncStorage.getItem('token');
          console.log(token);
          setIsAuthenticated(!!token);
          setIsLoading(false);
        };
      
        fetchToken();
      }, []);

    return (
        <>
            { isLoading ? (<View><Text>Loading</Text></View>) : isAuthenticated ? (
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
                    <Stack.Screen name="GeneratePassword" component={GeneratePassword} options={{headerShown: false}} />
                    <Stack.Screen name="SignUp" component={Register} options={{headerShown: false}} />
                    <Stack.Screen name="SignIn" component={Login} options={{headerShown: false}} />
                </Stack.Navigator>
            ) : (
                <Stack.Navigator initialRouteName='SignIn'>
                    <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
                    <Stack.Screen name="GeneratePassword" component={GeneratePassword} options={{headerShown: false}} />
                    <Stack.Screen name="SignUp" component={Register} options={{headerShown: false}} />
                    <Stack.Screen name="SignIn" component={Login} options={{headerShown: false}} />
                </Stack.Navigator>
            )}
        </>
    );
};

const Navigation = () => {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    );
};


export default Navigation;