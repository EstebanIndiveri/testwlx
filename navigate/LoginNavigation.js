import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../views/Login';

const Stack=createStackNavigator();

const LoginNavigation = () => {
    return ( 
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
     );
}
 
export default LoginNavigation;