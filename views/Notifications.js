import React,{Fragment} from 'react';
import { Text, View,SafeAreaView,StyleSheet } from 'react-native';
import Header from '../components/Header';
import {THEME_COLOR}from '../styles/Colors';

const Notificactions = () => {
    return ( 
        <Fragment>
        <SafeAreaView style={styles.container}>
        <View style={styles.containerTitle}>
            <Text style={styles.titleView}>Notifications</Text>
        </View>
        </SafeAreaView>
        </Fragment>
     );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:THEME_COLOR.PRIMARY,
    },
    containerTitle:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:40
    },
    titleView:{
        fontSize:24, 
        fontFamily:'Montserrat-Regular'
    }
})
 
export default Notificactions;