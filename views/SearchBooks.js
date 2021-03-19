import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View,Dimensions, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CardBook from '../components/CardBook';
import ErrorDefualt from '../components/Error';
import  Header from '../components/Header';
import Loader from '../components/Loader';
import { bookList } from '../stores/actions/bookActions';
import {THEME_COLOR}from '../styles/Colors';


const SearchBooks = ({navigation}) => {
    const [search, setSearch] = useState('');
  const [isVisible, setIsVisible] = useState(true);
    // const list=[];
    const [list, setList] = useState([]);
    // dispatch
    const dispatch=useDispatch();
    const bookLista=useSelector(state=>state.bookList);
    const {loading,error,books}=bookLista;
    function filterList(list) {
        try{
        return books.filter(
          (listItem) =>
 
              listItem.title
              .toLowerCase()
              .includes(search.toLowerCase())
        );
        }
        catch(error){
            console.log(error)
        }
      }

    useEffect(()=>{
        dispatch(bookList());
    },[search])

    const handlePress=(listItem)=>{
        navigation.navigate('DetailBook',{book:listItem.id})
        // console.log('pres')
    }
    const{width}=Dimensions.get('screen');
    return ( 
        <Fragment>
          
        <SafeAreaView style={styles.scrollStyle}>
       
            <View style={{height:100}}>
                <Header/>
                {loading&&<Loader/>}
                {error&&<ErrorDefualt/>}
                {
                    isVisible&&(
                    <View style={styles.containerSearch}>
                    <TextInput 
                    style={styles.searchBar}
                    onChangeText={(search)=>setSearch(search)}
                    value={search}
                    placeholder=' Search books'
                    autoFocus={true}
                    />
                </View>
                    )
                }
            </View>
            <View style={{marginTop:20}}>
                <ScrollView style={{marginBottom:20}}>
                        {
                            filterList(books).map((listItem,index)=>(
                                    <CardBook key={listItem.id} id={listItem.id} image={listItem.image_url} title={listItem.title} author={listItem.author}/>
                            ))
                        }
                </ScrollView>
            </View>
        </SafeAreaView>
        </Fragment>
     );
}
const styles=StyleSheet.create({
    searchBar: {
        fontSize: 21,
        margin: 40,
        width: '80%',
        marginTop:38,
        height: 40,
        borderRadius:15,
        padding:5,
        backgroundColor: THEME_COLOR.WHITE,
      },
      itemText:{
          fontSize:19,
          fontFamily:'Merriweather-Light',
          textTransform:'uppercase',
          borderBottomWidth:1,
          borderBottomColor:THEME_COLOR.BEEN_GRAY
      },
      scrollStyle:{
          flex:1,
          backgroundColor:THEME_COLOR.PRIMARY
        },
        containerSearch:{
            marginLeft:10,
            marginRight:'auto',
            width:'95%',
            marginTop:4,
            position:'absolute',
            top:0
        }
})
 
export default SearchBooks;