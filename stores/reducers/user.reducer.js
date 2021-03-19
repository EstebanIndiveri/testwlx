import { AUTH_FAIL, AUTH_SUCCESS, AUTH__REQUEST,AUTH_LOGOUT } from "../constants/authConstants";

const initialState = {
    users: [],
    isLoading: false,
    authenticate:false,
  }
  
  export const userReducer = (state = initialState, action) => {
    const { payload } = action
    switch (action.type) {
      case AUTH__REQUEST:
        return {
          ...state,
          isLoading: true
        }
      case AUTH_SUCCESS:
        return {
          ...state,
          users: payload,
          authenticate:true,
          isLoading: false
        }
      case AUTH_LOGOUT:
        return{
          users: [],
          isLoading: false,
          authenticate:false,
        }
      case AUTH_FAIL:
        return {
          ...state,
          isLoading: false
        }
      default:
        return state
    }
  }
  
  export default userReducer
  