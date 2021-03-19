  
import React from 'react';
import LoginNavigation from './LoginNavigation';
import TabNavigator from './TabNavigator';
import { useDispatch, useSelector } from 'react-redux';

export default function AuthNavigation() {
  const userInfo=useSelector(state=>state.userReducer);
  const {isLoading,authenticate}=userInfo;
  let auth=false;

  return authenticate ?  <TabNavigator />:<LoginNavigation />;
}