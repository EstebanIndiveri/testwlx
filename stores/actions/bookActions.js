import { BOOK_DETAILS_FAIL, BOOK_DETAILS_REQUEST, BOOK_DETAILS_SUCCESS, BOOK_LIST_FAIL, BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS, BOOK_WISH_FAIL, BOOK_WISH_REQUEST, BOOK_WISH_SUCCESS } from "../constants/bookContstants";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import AsyncStorage from '@react-native-community/async-storage';
// import AsyncStorage from '@react-native-async-storage/async-storage';


export const bookList=()=>async(dispatch)=>{
    try {
        dispatch({
            type:BOOK_LIST_REQUEST
        })
        const {data}=await axios.get('http://192.168.0.5:4000/books');
        dispatch({
            type:BOOK_LIST_SUCCESS,
            payload:data
        })
        // console.log(data);
    } catch (error) {
        dispatch({
            type:BOOK_LIST_FAIL,
            payload:error.response&&error.response.data.message?error.response.data:'No se pudieron cargar los libros, intente mas tarde'
        })
    }
}
export const listBookDetails=(id)=>async(dispatch)=>{
    try {
        dispatch({
            type:BOOK_DETAILS_REQUEST
        })
        const {data}=await axios.get(`http://192.168.0.5:4000/books/${id}`)
        dispatch({
            type:BOOK_DETAILS_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:BOOK_DETAILS_FAIL,
            payload:error.response && error.response.data.message?error.response.data.message:'No se pudo cargar el libro, intente mas tarde'
        })
        console.log(error);
    }
}

export const addToWishList=(id)=>async(dispatch,getState)=>{
    try {
        dispatch({
            type:BOOK_WISH_REQUEST
        })
        const {data}=await axios.get(`http://192.168.0.5:4000/books/${id}`)
        dispatch({
            type:BOOK_WISH_SUCCESS,
            payload:data
        })
        // AsyncStorage.setItem('wishList',JSON.stringify(getState().data));
        // console.log(getState().bookWishList.booksWish);
       await AsyncStorage.setItem('@wishList',JSON.stringify(getState().bookWishList.booksWish));
    } catch (error) {
        dispatch({
            type:BOOK_WISH_FAIL,
            payload:error.response && error.response.data.message?error.response.data.message:'No se pudo cargar el libro, a tu lista de deseos, intente mas tarde'
        })
    }
    // AsyncStorage.setItem('wishListItems',JSON.stringify(data));
}
