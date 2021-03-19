import React from 'react'
import Home from '../views/Home';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Button, Image, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import { useIsFocused } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

import Login from '../views/Login'
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
// const image=;


function MyTabs({navigation}) {
  // console.log(navigation);
  const isFocused = useIsFocused();
  const route = useRoute();
    // console.log(image)
    const IconLibrary=(props)=>{
        return(
        <Image source={ require("../assets/Tool_bar/ic_library.png")} />
        )
    };
    const IconSettings=(props)=>{
      return(
        // <TouchableOpacity >
      <Image source={ require("../assets/Tool_bar/ic_settings.png")} />
      // </TouchableOpacity>
      )
  };
    
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel:'Library',
          tabBarIcon: ({ focused, color, size }) => {
            return (
          // <TouchableOpacity onPress={()=>console.log(route.name)}>
                    <IconLibrary />
        // </TouchableOpacity>

            )
          }
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Login}
        options={{
          tabBarLabel:'HOLA',
          tabBarIcon: ({ focused, color, size }) => {
            return <Button title={'ios-settings'} />
          }
        }}
      />
    <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel:'Settings',
          tabBarIcon: ({ focused, color, size }) => {
            
            return (
                  <IconSettings />

          )
          }
        }}
      />
      
    </Tab.Navigator>
  )
}

const MainNavigation = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" >
        <Stack.Screen name="Home" component={MyTabs} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
