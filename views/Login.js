import React,{useState,useEffect, Fragment} from 'react';
import { SafeAreaView, StyleSheet, Text, View ,Image,Dimensions,Animated, ScrollView} from 'react-native';
import FormLogin from '../components/FormLogin';
import {THEME_COLOR}from '../styles/Colors';

const{width}=Dimensions.get('screen');
const{height}=Dimensions.get('screen');
const Login = () => {
    const [animated]=useState(new Animated.Value(0));
  
    useEffect(() => {
        Animated.spring(animated,{
            toValue:1,
            friction:5,
            tension:10,
            useNativeDriver:true,
        }).start()
    }, [])

    const styleAnimated={
        opacity:animated
    }

    const styleFriction={
        transform:[{scale:animated}]
    }

    return ( 
        <Fragment>
        <SafeAreaView style={styles.scrollContainer}>
        <Image source={require('../assets/General/bc_inicio.png')} style={styles.backgroundS} resizeMethod="resize" resizeMode="cover" />
            
        <ScrollView 
        showsVerticalScrollIndicator={false}
         style={styles.scrollTransparent}
         >

        <Animated.View style={[styles.fade,styleAnimated,styleFriction]}>
        <View style={styles.TitleContainer}>
            <Text style={styles.titleLogin}>Welcome</Text>
        </View>
        <View style={styles.containerLogin}>
            <View style={styles.containerLoginDiv}>
                <Text style={styles.loginDivTitle}>¡All your favourites books here!</Text>
                <View style={{marginTop:20}}>
                <FormLogin/>
                </View>
            </View>
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <Image source={require('../assets/General/ic_group.png')} style={{height:120,width:120}} resizeMethod="resize" resizeMode="contain"/>
        </View>
        </Animated.View>
        </ScrollView>
        </SafeAreaView>
</Fragment>
     );
     
}

const styles=StyleSheet.create({
    scrollContainer:{
        flex:1,
        backgroundColor:THEME_COLOR.PRIMARY
    },
    containerLogin:{
        padding:10,
    backgroundColor:THEME_COLOR.WHITE,
    elevation:10,
    borderRadius:15,
    shadowOffset:{
        width:12,
        height:12,
    },
    shadowOpacity:16.00,
    width:'90%',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:40,
    marginBottom:50,

    },
    backgroundS:{
        width:width,
        height:height,
        position:'absolute',
    },
    fade:{
        flex:1
    },
    scrollTransparent:{
        backgroundColor:'#00000000',
         position:'absolute',
         left:0,
         right:0,
         top:0,
         bottom:0
    },
    TitleContainer:{
        marginTop:70,
        justifyContent:'center',
        alignItems:'center'
    },
    titleLogin:{
        fontSize:40,
        fontFamily:'Montserrat-SemiBold',
        color:THEME_COLOR.WHITE
    },
    containerLoginDiv:{
    width:'100%',
    padding:10
    },
    loginDivTitle:{
        width:'100%',
        textAlign:'center',
        fontSize:20,
        fontFamily:'Merriweather-Regular',
        marginTop:10,
        color:THEME_COLOR.BLACK
    },
})
 
export default Login;