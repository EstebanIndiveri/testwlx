import React,{useState} from 'react';
import { View, Text, StatusBar, } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
// import Login from '../views/Login';
// import CreateUser from '../views/CreateUser';
import SettingScreen from '../views/Settings';
import TabBar from '../components/TabBar';

// import Home from '../views/Home';

import WishList from '../views/WishList';
import AddNew from '../views/AddNew';
import Rentals from '../views/Rentals';
import ProfileNavigator from './ProfileNavigation';
import HomeNavigation from './HomeNavigation';


const Tab=createBottomTabNavigator();
export default function TabNavigator() {
    return (
        <Tab.Navigator 
        tabBar={(props)=><TabBar {...props}/>}
        >
            <Tab.Screen name="Home" component={HomeNavigation} />
            <Tab.Screen name="WishList" component={WishList} />
            <Tab.Screen name="AddNew" component={AddNew}/>
            <Tab.Screen name="Rentals" component={Rentals} />
            <Tab.Screen name="Settings" component={ProfileNavigator}/>

        </Tab.Navigator>
        )
}
