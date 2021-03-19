import React from 'react'
import { View, Text, SafeAreaView,StyleSheet,Button,Alert,BackHandler} from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from './Header';
// import FontAwesome from 'react-native-vector-icons/Ionicons'
// import RNRestart from 'react-native-restart'
// some stylesheet
// some button component

export class ErrorBoundary extends React.Component<any, any> {

  state = {
    error: false
  }

  static getDerivedStateFromError (error) {
    return { error: true };
  }

  componentDidCatch (error, errorInfo) {
    // deal with errorInfo if needed
  }

  destroyAuthToken = async () => {
    // await AsyncStorage.removeItem(@whisList);
  }

  handleBackToSignIn = () => {
    Alert.alert(
      "Restart",
      "¿Are you sure Restart?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => BackHandler.exitApp() }
      ]
      );
  }

  render () {

    const { theme } = this.context;

    if (this.state.error) {
      return (
        <SafeAreaView
          style={styles.safeAreaView}
        >
        <Header/>
          <View style={styles.container}>
            <View style={styles.content}>
              <Text style={{ fontSize: 32,fontFamily:'Montserrat-SemiBold' }}>Oops, Something Went Wrong</Text>
              <Text style={{ marginVertical: 10, lineHeight: 23,fontSize:18,textAlign:'justify',marginVertical:40, fontFamily:'Merriweather-Regular'}}>
                The app ran into a problem and could not continue. We apologise for any inconvenience this has caused! Press the button below to restart the app and sign back in. Please contact us if this issue persists.
              </Text>
              <Button
                title='Back to Log In Screen'
                onPress={() => this.handleBackToSignIn()}
               
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

  const styles=StyleSheet.create({
    safeAreaView:{
      flex:1,
    },
    container:{
      flex:1,
      marginTop:20,
    },
    content:{
      padding:50,
    },
    priText:{
  
    }
    
})