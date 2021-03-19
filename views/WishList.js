import React,{useState,useEffect, Fragment} from 'react';
import {  FlatList, SafeAreaView,  StyleSheet, View,Dimensions,Animated, Text } from 'react-native';
import CardBook from '../components/CardBook';
import Header from '../components/Header';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import ErrorDefualt from '../components/Error';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {THEME_COLOR}from '../styles/Colors';


const WishList = ({navigation}) => {
    const [animated]=useState(new Animated.Value(0));
    const [Library, setLibrary] = useState([]);
    const [isScrollEnabled, setIsScrollEnabled]=useState(false);
    const{height}=Dimensions.get('window');
    const{width}=Dimensions.get('window');
    const dispatch=useDispatch();
    const wishList=useSelector(state=>state.bookWishList);
    const {loading,error,booksWish}=wishList;
    console.log(booksWish)
    const he=height-90;
    const he2=height-170;
    useEffect(() => {
        Animated.spring(animated,{
            toValue:1,
            friction:3,
            tension:30,
            useNativeDriver:true,
        }).start()
        store();
    }, [])
      const styleAnimated={
        transform:[{scale:animated}]
    }
    const store=async()=>{
        const booksListStorage=JSON.parse(await AsyncStorage.getItem('@wishList'))?JSON.parse(await AsyncStorage.getItem('@wishList')):[];
        console.log(booksListStorage)
        setLibrary(booksListStorage);
    }

    return ( 
        <Fragment>
        <SafeAreaView style={styles.container}>
        <Header/>
        
            {loading&&<Loader/>}
            {error&&<ErrorDefualt/>}
            <Text style={styles.TextTitle}>Let's read!</Text>

            <Animated.View style={width>500?{height:he2}:{height:he}}>
                <FlatList
                style={styles.flatList}
                    data={booksWish}
                    scrollEnabled={isScrollEnabled}
                    renderItem={({item})=>(
                        <CardBook activeStar={true} id={item.id} image={item.image_url} title={item.title} author={item.author} onPressDetail={false}/>
                    )}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item)=>item.id.toString()}
                />

            </Animated.View>
        </SafeAreaView>
        </Fragment>
     );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:THEME_COLOR.PRIMARY,
    },
    TextTitle:{
        fontSize:30,
        // color:THEME_COLOR.BLACK,
        color:THEME_COLOR.WHITE,
        textAlign:'center',
        fontFamily:'Montserrat-SemiBold'
    },
    flatList:{
        marginTop:20,
        marginBottom:20
    }
})
 
export default WishList;