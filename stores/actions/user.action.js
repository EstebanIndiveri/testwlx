import {AUTH__REQUEST,AUTH_FAIL,AUTH_SUCCESS,AUTH_LOGOUT} from '../constants/authConstants';
import axios from 'axios';

export const loginUser=(user)=>async(dispatch)=>{
    try {
        dispatch({
            type:AUTH__REQUEST
        })
        const {data}=await axios.post(`http://192.168.0.5:4000/sign_in/`,user)
        dispatch({
            type:AUTH_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:AUTH_FAIL,
            payload:error.response && error.response.data.message?error.response.data.message:'No se pudo cargar el libro, intente mas tarde'
        })
        console.log(error);
    }
}
export const logoutUser=()=>async(dispatch)=>{
    try{
        dispatch({
            type:AUTH_LOGOUT
        })
    }catch (error) {
        dispatch({
            type:AUTH_FAIL,
            payload:error.response && error.response.data.message?error.response.data.message:'No se pudo cargar el libro, intente mas tarde'
        })
        console.log(error);
    }
}

// import { getUser } from '../../api/fakeApiUser'

// export const fetchUserRequest = () => {
//   return {
//     type: 'FETCH_USER_REQUEST'
//   }
// }

// export const fetchUserSuccess = users => {
//   return {
//     type: 'FETCH_USER_SUCCESS',
//     payload: users
//   }
// }

// export const fetchUserFail = () => {
//   return {
//     type: 'FETCH_USER_FAILED'
//   }
// }

// export const fetchDataUser = () => async dispatch => {
//   try {
//     dispatch(fetchUserRequest())
//     const { data } = await getUser()
//     dispatch(fetchUserSuccess(data))
//   } catch (error) {
//     dispatch(fetchUserFail())
//   }
// }
