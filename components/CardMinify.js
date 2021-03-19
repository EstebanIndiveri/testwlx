import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text,Animated, View, TouchableWithoutFeedback } from 'react-native';

const CardMinify = ({title,image,id,author}) => {

    const [animated]=useState(new Animated.Value(1));
    const navigation=useNavigation();

    const pressBtn=()=>{
        Animated.spring(animated,{
            toValue:.9,
            useNativeDriver:true,
        }).start();
    }
    const leaveBtn=()=>{
        Animated.spring(animated,{
            toValue:1,
            friction:1,
            tension:100,
            useNativeDriver:true,
        }).start()
        setTimeout(() => {
            navigation.navigate('DetailBook',{book:id})
        }, 100);

    }
    const styleAnimated={
        transform:[{scale:animated}]
    }
    
    return ( 
        <TouchableWithoutFeedback
            onPressIn={pressBtn}
            onPressOut={leaveBtn}
            >
        <Animated.View style={[styles.containerCard,styleAnimated]}>
           {

               image?(  
                <Image source={{uri:image}} style={{height:100,width:100,borderRadius:10}}
                 resizeMode='contain'
                 resizeMethod='resize'
                />):
                <Image source={require('../assets/General/not_image_found.png')} style={{height:100,width:100}}
                resizeMethod='resize'
                resizeMode='cover'
                />
           }
         
            <View style={styles.containerText}> 
            <Text style={styles.titleCard}>{title}</Text>
            </View>
        </Animated.View>
        </TouchableWithoutFeedback>
     );
}
const styles=StyleSheet.create({

    containerCard:{
        display:'flex',
        flexDirection:'column',
        height:200,
        elevation:2,
        borderRadius:20,
        shadowOffset:{
            width:12,
            height:12,
        },
        shadowOpacity:16.00,
        marginHorizontal:5,
        marginTop:70,
        backgroundColor: "#FFF",
        padding:20,
        alignItems:'center',
        justifyContent:'space-around',
        marginBottom:10,
    },
    titleCard:{
        fontSize:15,
        fontFamily:'Montserrat-Regular',
        textAlign:'center'
    },
    authorCard:{
        fontSize:15,
        fontFamily:'Merriweather-Light'
    },
    containerText:{
        alignSelf:'center',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        flexDirection:'column'
    }
})
export default CardMinify;