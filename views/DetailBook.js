import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View,ScrollView } from 'react-native';
import axios from 'axios';
import CardDetailBook from '../components/CardDetailBook';
import CardMinify from '../components/CardMinify';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { listBookDetails} from '../stores/actions/bookActions';
import Loader from '../components/Loader';
import ErrorDefualt from '../components/Error';

const DetailBook = (props) => {
    // const [list, setList] = useState([]);
    const idBook=props.route.params.book;
    // redux dispatch
    const dispatch=useDispatch();

    const bookDetail=useSelector(state=>state.bookDetail);
    const {loading,error,book}=bookDetail;

    const bookLista=useSelector(state=>state.bookList);
    const {loading:loadingList,error:errorList,books}=bookLista;
    
    useEffect(()=>{
      
        dispatch(listBookDetails(idBook));

    },[idBook])

    function filterList(list) {
        if(Object.keys(book).length!==0){
            const{genre}=book;        
        try{
        return books.filter(
          (listItem) =>
              listItem.genre
              .toLowerCase()
              .includes(genre.toLowerCase())
        );
        }
        catch(error){
            console.log(error)
        }
        }
      }

    return ( 
        <SafeAreaView style={styles.container}>
            {loading&&<Loader/>}
            {error&&<ErrorDefualt/>}
            <CardDetailBook 
            title={book.title}
            image={book.image_url}
            author={book.author}
            year={book.year}
            id={book.id}
            genre={book.genre}
            />
            <ScrollView
            horizontal={true}
            style={{marginBottom:20,marginHorizontal:20, width:'100%'}}>
                {
                    Object.keys(book).length!==0&&
                    filterList(books).map((listItem,index)=>(
                            <CardMinify key={listItem.id} id={listItem.id} image={listItem.image_url} title={listItem.title} author={listItem.author}/>
                    ))
                }
            </ScrollView>
        </SafeAreaView>
     );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingTop:40,
        backgroundColor:' rgba(154, 181, 239, 0.3)',

    }
})
 
export default DetailBook;


/*
    DESDE AQUI LA CLEAN:
    const [list, setList] = useState([]);

      // const getBookbyID=async()=>{
        //     const {data}=await axios.get(`http://192.168.0.5:4000/books/${idBook}`)
        //     // console.log(data)
        //     setBookSelected(data);
        // }
        // getBookbyID();
     // title={bookSelected.title}
            // image={bookSelected.image_url}
            // author={bookSelected.author}
            // year={bookSelected.year}
            // genre={bookSelected.genre}
        // console.log(listItem)

                    // listItem.author
            //   .toLowerCase()
            //   .includes(search.toLowerCase()) ||

            // console.log(genre);

            
        // const getBooks=async()=>{
        //     const {data}=await axios.get(`http://192.168.0.5:4000/books`)
        //     console.log(data)
        //     setList(data);
        // }
        // getBooks();

*/