import React from 'react'
import { View, Text, SafeAreaView,Button } from 'react-native'
// import AsyncStorage from '@react-native-community/async-storage'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/core'
// import FontAwesome from 'react-native-vector-icons/Ionicons'
// import RNRestart from 'react-native-restart'
// some stylesheet
// import { styles } from './styles'
// some button component

export class ErrorBoundary extends React.Component {

  state = {
    error: false
  }
  navigate=useNavigation();
  static getDerivedStateFromError (error) {
    return { error: true };
  }

  componentDidCatch (error, errorInfo) {
    // deal with errorInfo if needed
  }

  destroyAuthToken = async () => {
    await AsyncStorage.removeItem('user_settings');
  }

  handleBackToSignIn = async () => {
    // remove user settings
    await this.destroyAuthToken();
    // restart app
    // RNRestart.Restart();
  }

  render () {

    const { theme } = this.context;

    if (this.state.error) {
      return (
        <SafeAreaView
         
        >
          <View >
            <View >
              <Text style={{ width: '100%', }}>
            
              </Text>
              <Text style={{ fontSize: 32 }}>Oops, Something Went Wrong</Text>
              <Text style={{ marginVertical: 10, lineHeight: 23, fontWeight: '500', }}>
                The app ran into a problem and could not continue. We apologise for any inconvenience this has caused! Press the button below to restart the app and sign back in. Please contact us if this issue persists.
              </Text>
              <Button
                title={'Back to Sign In Screen'}
                onPress={() => this.navigate.goBack()}
                style={{ 
                  marginVertical: 15, 
                }}
              />
            </View>
          </View>
        </SafeAreaView>
      )
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;