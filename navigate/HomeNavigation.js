import React, { Fragment } from 'react';
import { Button, Text, View,Image, TouchableOpacity, StatusBar } from 'react-native';
import {CardStyleInterpolators,createStackNavigator} from '@react-navigation/stack';
import EditProfile from '../views/EditProfile';
// import SettingScreen from '../views/Settings';
import  Header from '../components/Header';
import Notificactions from '../views/Notifications';
import Home from '../views/Home';
import DetailBook from '../views/DetailBook';
import SearchBooks from '../views/SearchBooks';
;
        // screenOptions={{headerTransparent:true,title:''}}

const Stack=createStackNavigator();

const HomeNavigation = () => {
  
    return ( 
        <Stack.Navigator   
        headerMode='float'
        >
        <Stack.Screen 
            name="Home" 
            component={Home}
            options={({navigation}) =>({
              title:'library',
              headerBackground: (props) => <Header />,
              headerLeft:()=>(<TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                <Image source={require('../assets/Navigation_bar/ic_notifications.png')} resizeMode="contain" style={{height:20,width:20,marginLeft:20}}/>
                </TouchableOpacity> ),
                 headerRight:()=>(
                  <TouchableOpacity 
                  onPress={() => {
                    navigation.navigate('SearchBooks')
                    console.log('search')
                  }}
                  >
                      <Image source={require('../assets/General/ic_search_placeholder.png')} style={{height:20,width:20,marginRight:20,tintColor:'#FFF'}}/>
                  </TouchableOpacity>
                ),
              headerTitleStyle:{textAlign:'center',color:'#fff',fontFamily:'Montserrat-SemiBold',textTransform:'uppercase'},
              headerTitleAlign:'center',
              gestureEnabled:true,
              gestureDirection:'horizontal',
              cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
              })}/>

            <Stack.Screen 
            options={({navigation})=>({  
              title:'Book',
              headerBackground: (props) => <Header />,
              headerLeft:()=>(
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/Navigation_bar/ic_back.png')} style={{height:20,width:20,marginLeft:20}}/>
                </TouchableOpacity>
              ),
              headerTitleStyle:{textAlign:'center',color:'#fff',fontFamily:'Montserrat-SemiBold',textTransform:'uppercase'},
              headerTitleAlign:'center',
            
              // Screen scroll
              gestureEnabled:true,
              gestureDirection:'horizontal',
              cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
              }
             )}
            name="DetailBook" 
            component={DetailBook}/>
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
            <Stack.Screen
            name="SearchBooks"
            component={SearchBooks}
            options={({navigation})=>({  
              title:'',
              // headerBackground: (props) => <Header />,
              headerTransparent:true,
              headerLeft:()=>(
                <TouchableOpacity 
                onPress={() => navigation.goBack()}
                >
                    <Image source={require('../assets/Navigation_bar/ic_back.png')} style={{height:20,width:20,marginLeft:20,zIndex:-999}}/>
                </TouchableOpacity>
              ),
              // Screen scroll
              gestureEnabled:true,
              gestureDirection:'horizontal',
              cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
              }
             )}
            // options={{
            //   headerTransparent:true,
            //   headerTitle:'',
            //   headerLeft:()=>(
            //     <TouchableOpacity 
            //     onPress={() => navigation.goBack()}
            //     >
            //         <Image source={require('../assets/Navigation_bar/ic_back.png')} style={{height:20,width:20,marginLeft:20}}/>
            //     </TouchableOpacity>
            //   ),
            // }}
            />
        </Stack.Navigator>
     );
}
 
export default HomeNavigation;