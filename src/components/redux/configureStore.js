import { combineReducers } from 'redux';
import bookReducer from './books/books';
import CategoryReducer from './categories/categories';

const rootReducer = combineReducers({
  book: bookReducer,
  categ: CategoryReducer,
});
export default rootReducer;
