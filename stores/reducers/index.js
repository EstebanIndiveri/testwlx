import { combineReducers } from 'redux'
import { bookDetailsReducer, bookListReducer, bookWishListReducer } from './bookReducer'
import userReducer from './user.reducer'
//insert another reducers here to be combine

const reducers = combineReducers({
  userReducer,
  bookList:bookListReducer,
  bookDetail:bookDetailsReducer,
  bookWishList:bookWishListReducer,
})

export default reducers
