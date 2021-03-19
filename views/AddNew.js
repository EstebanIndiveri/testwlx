import React,{Fragment} from 'react';
import { Text, View,SafeAreaView,StyleSheet } from 'react-native';
import Header from '../components/Header';
import {THEME_COLOR}from '../styles/Colors';

const AddNew = () => {
    return ( 
        <Fragment>
        <SafeAreaView style={styles.container}>
        <Header/>
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Publish your book</Text>
            <Text style={styles.subTitle}>Coming soon</Text>

        </View>
        </SafeAreaView>
        </Fragment>
     );
}
// CustomStyles
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:THEME_COLOR.PRIMARY,
    },
    viewStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:40
    },
    textStyle:{
        fontSize:24, 
        fontFamily:'Montserrat-Regular'
    },
    subTitle:{
        fontSize:16,
        fontFamily:'Merriweather-Regular',
    }
})
 
export default AddNew;