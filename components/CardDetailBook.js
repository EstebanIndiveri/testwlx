import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Image, StyleSheet, Text,Animated, View, TouchableWithoutFeedback,TouchableOpacity, Alert} from 'react-native';
import { useDispatch } from 'react-redux';
import { addToWishList } from '../stores/actions/bookActions';

const CardDetailBook = ({title,image,id,author,year,genre}) => {

    const [animated]=useState(new Animated.Value(1));
    const navigation=useNavigation();
    const dispatch=useDispatch();

    const pressBtn=()=>{
        Animated.spring(animated,{
            toValue:.9,
            useNativeDriver:true,
        }).start();
    }
    const leaveBtn=()=>{
        Animated.spring(animated,{
            toValue:1,
            friction:10,
            tension:30,
            useNativeDriver:true,
        }).start()
        // navigation.navigate('DetailBook',{book:id})
    }
    const styleAnimated={
        transform:[{scale:animated}]
    }

    const handlePressWish=()=>{
        console.log('add wish')
        dispatch(addToWishList(id))
        Alert.alert(
            "Let's read",
            'Add to wishlish'
        )
    }

    const handlePressRent=async()=>{
        console.log('add Rent')
        Alert.alert(
            "Comming soon",
            "Comming you can rent a book!"
        )
        // await AsyncStorage.removeItem('@wishList')
        // Redictect rentals o modal
    }

    return ( 
        // <SafeAreaView style={{marginTop:-20,flex:1,backgroundColor:'red'}}>
        <TouchableWithoutFeedback
            onPressIn={pressBtn}
            onPressOut={leaveBtn}
            >
        <Animated.View style={[styles.containerCard,styleAnimated]}>
            <View style={{width:'100%',justifyContent:'space-evenly',display:'flex',flexDirection:'row'}}>
                    {

                    image?(  
                    <Image source={{uri:image}} style={{height:135,width:135}}
                    resizeMode='contain'
                    resizeMethod='resize'
                    />):
                    <Image source={require('../assets/General/not_image_found.png')} style={{height:135,width:100}}
                    resizeMethod='resize'
                    resizeMode='cover'
                    />
                    }

            <View style={styles.containerText}> 
            <Text style={styles.titleCard}>{title}</Text>
            <Text style={styles.available}>Available</Text>
            <Text style={styles.authorCard}>{author}</Text>
            <Text style={styles.authorCard}>{year}</Text>
            <Text style={styles.authorCard}>{genre}</Text>
            </View>
            </View>
            <View style={{marginTop:20}}>
                <TouchableOpacity
                onPressIn={handlePressWish}
                
                >
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>Add to wishilist</Text>
                    </View>
                </TouchableOpacity>
                <TouchableWithoutFeedback
                onPressIn={handlePressRent}
                >
                    <View style={styles.btn2}>
                        <Image style={styles.backgroundImage} 
                        source={require('../assets/General/img_main_button.png')}
                        resizeMethod='scale'
                        resizeMode='cover'
                        />
                        <Text style={styles.btnText2}>Rent</Text>

                    </View>
                </TouchableWithoutFeedback>
            </View>
           
        </Animated.View>
        </TouchableWithoutFeedback>
        // </SafeAreaView>
     );
}
const styles=StyleSheet.create({

    containerCard:{
        display:'flex',
        // flexDirection:'row',
        minHeight:300,
        elevation:2,
        borderRadius:15,
        shadowOffset:{
            width:12,
            height:12,
        },
        shadowOpacity:16.00,
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto',
        backgroundColor: "#FFF",
        padding:20,
        // alignItems:'flex-start',
        // justifyContent:'space-evenly',
        // paddingHorizontal:0,
        marginBottom:10,
    },
    titleCard:{
        fontSize:25,
        // fontSize:24,
        fontFamily:'Montserrat-SemiBold'
    },
    authorCard:{
        fontSize:16,
        fontFamily:'Merriweather-Light'
    },
    containerText:{
        // marginLeft:20,
        width:'60%',
        display:'flex',
        flexDirection:'column'
    },
    available:{
        color:'yellowgreen',
        fontSize:16,
        fontFamily:'Merriweather-Bold'
    },
    btn:{
        backgroundColor:'#FFF',
        borderWidth:2,
        padding:10,
        borderRadius:30,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        borderColor:'cornflowerblue'
    },
    btnText:{
        color:'cornflowerblue',
        fontFamily:'Montserrat-SemiBold',
        textTransform:'uppercase',
        fontSize:18,
    },
    backgroundImage:{
        width: '110%',
        // height: '100%',
        // borderRadius:10,
        position:'absolute',
        // top:0,
        // left:0,
        
    },
    btn2:{
        // flex:1,
        marginTop:15,
        // textAlign:'center',
        // alignItems:'center',
        // backgroundColor:'red',
        // justifyContent:'center',
        padding:10,
        borderRadius:30,
        overflow:'hidden'
    },
    btnText2:{
        color:'#FFF',
        fontFamily:'Montserrat-SemiBold',
        textAlign:'center',
        textTransform:'uppercase',
        fontSize:18,
    },
})
export default CardDetailBook;
 