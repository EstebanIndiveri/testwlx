import React,{useState,useEffect} from 'react';
import {  FlatList, SafeAreaView,  StyleSheet, View,Dimensions,Animated, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CardBook from '../components/CardBook';
import axios from 'axios';
import { bookList } from '../stores/actions/bookActions';
import Loader from '../components/Loader';
import ErrorDefualt from '../components/Error';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {THEME_COLOR}from '../styles/Colors';
// import {bookList} from '../stores/actions/bookActions';


const Home = ({navigation}) => {
    const [animated]=useState(new Animated.Value(0));
    const [isScrollEnabled, setIsScrollEnabled]=useState(false);
    const{height}=Dimensions.get('window');
    const{width}=Dimensions.get('window');

    // REDUX SELECTORS
    const dispatch=useDispatch();
    const bookLista=useSelector(state=>state.bookList);
    const {loading,error,books}=bookLista;
    // testqueryh
    const he=height-90;
    const he2=height-170;

    useEffect(() => {
        Animated.spring(animated,{
            toValue:1,
            friction:3,
            tension:30,
            useNativeDriver:true,
        }).start()
        dispatch(bookList());
        store();
    }, [dispatch])

    const store=async()=>{
        console.log(JSON.parse(await AsyncStorage.getItem('@wishList')));

    }
      const styleAnimated={
        transform:[{scale:animated}]
    }

    return ( 
        <SafeAreaView style={styles.container}>
            {loading&&<Loader/>}
            {error&&<ErrorDefualt error={error}/>}
            <Animated.View style={width>500?{height:he2}:{height:he}}>
                <FlatList
                    data={books}
                    renderItem={({item})=>(
                        <CardBook id={item.id} image={item.image_url} title={item.title} author={item.author}/>
                    )}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item)=>item.id.toString()}
                />
            </Animated.View>
        </SafeAreaView>
     );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:THEME_COLOR.PRIMARY,
        paddingTop:30,
    }
})
 
export default Home;

