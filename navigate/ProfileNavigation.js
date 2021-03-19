import React, { Fragment } from 'react';
import { Button, Text, View,Image, TouchableOpacity, StatusBar } from 'react-native';
import {CardStyleInterpolators,createStackNavigator} from '@react-navigation/stack';
import EditProfile from '../views/EditProfile';
import SettingScreen from '../views/Settings';
import  Header from '../components/Header';
import Notificactions from '../views/Notifications';
;
        // screenOptions={{headerTransparent:true,title:''}}

const Stack=createStackNavigator();

const myOptions={

  // headerTitle:()=><Header/>,
  title:'SETTINGS',
  headerBackground: (props) => <Header />,
  headerLeft:()=>(
    <TouchableOpacity 
    // onPress={() => navigation.navigate('Editprofile')}
    >
      <Image
        // style={styles.iconLeft}
        source={require('../assets/Navigation_bar/ic_notifications.png')}
        resizeMode="contain"
        style={{height:20,width:20,marginLeft:20}}
      />
    </TouchableOpacity>
  ),
//   headerRight:()=>(
// <TouchableOpacity >
//       <Image
//         // style={styles.iconLeft}
//         source={require('../assets/Navigation_bar/ic_notifications.png')}
//         resizeMode="contain"
//         style={{height:30,width:30,marginLeft:20}}
//       />
//     </TouchableOpacity>
//   ),
  headerTitleStyle:{textAlign:'center',color:'#fff'},
  headerTitleAlign:'center',

  // Screen scroll
  gestureEnabled:true,
  gestureDirection:'horizontal',
  cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
}

const ProfileNavigator = () => {
  
    return ( 
        <Stack.Navigator   
        headerMode='float'
        >
            <Stack.Screen 
            name="Settings" 
            component={SettingScreen}
            options={({navigation}) =>({
              title:'SETTINGS',
              headerBackground: (props) => <Header />,
              headerLeft:()=>(
                <TouchableOpacity 
                onPress={() => navigation.navigate('Notifications')}
                >
                  <Image
                    // style={styles.iconLeft}
                    source={require('../assets/Navigation_bar/ic_notifications.png')}
                    resizeMode="contain"
                    style={{height:20,width:20,marginLeft:20}}
                  />
                </TouchableOpacity>
              ),
              headerTitleStyle:{textAlign:'center',color:'#fff'},
              headerTitleAlign:'center',
            
              // Screen scroll
              gestureEnabled:true,
              gestureDirection:'horizontal',
              cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
              }
             )}

            />
            <Stack.Screen 
            // options={{...myOptions,title:'EDITA TUS DATOS',
            // headerLeft:() => ( 
            //   <TouchableOpacity
            //   >
            // <Image source={require('../assets/Navigation_bar/ic_back.png')} style={{height:20,width:20,marginLeft:20}}/>
            // </TouchableOpacity>
            // )
            // ,headerRight:''}} 
            options={({navigation})=>({  
              title:'SETTINGS',
              headerBackground: (props) => <Header />,
              headerLeft:()=>(
                <TouchableOpacity 
                onPress={() => navigation.navigate('Settings')}
                >
                    <Image source={require('../assets/Navigation_bar/ic_back.png')} style={{height:20,width:20,marginLeft:20}}/>
                </TouchableOpacity>
              ),
              headerTitleStyle:{textAlign:'center',color:'#fff'},
              headerTitleAlign:'center',
            
              // Screen scroll
              gestureEnabled:true,
              gestureDirection:'horizontal',
              cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
              }
             )}
            name="EditProfile" 
            component={EditProfile}/>
            <Stack.Screen
            name="Notifications"
            component={Notificactions}
            options={({navigation})=>({  
              title:'SETTINGS',
              headerBackground: (props) => <Header />,
              headerLeft:()=>(
                <TouchableOpacity 
                onPress={() => navigation.goBack()}
                >
                    <Image source={require('../assets/Navigation_bar/ic_back.png')} style={{height:20,width:20,marginLeft:20}}/>
                </TouchableOpacity>
              ),
              headerTitleStyle:{textAlign:'center',color:'#fff'},
              headerTitleAlign:'center',
            
              // Screen scroll
              gestureEnabled:true,
              gestureDirection:'horizontal',
              cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
              }
             )}
            />
        </Stack.Navigator>
     );
}
 
export default ProfileNavigator;