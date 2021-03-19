import React,{Fragment} from 'react';
import { Text, View,SafeAreaView,StyleSheet } from 'react-native';
import Header from '../components/Header';
import {THEME_COLOR}from '../styles/Colors';

const Rentals = () => {
    return ( 
        <Fragment>
        <SafeAreaView style={styles.container}>
        <Header/>
        <View style={styles.containerTitle}>
            <Text style={styles.titleView}>Your Rentals</Text>
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
export default Rentals;