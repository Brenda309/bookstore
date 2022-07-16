import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import CategoryReducer from './categories/categories';

const store = configureStore({
  reducer: { bookStores: bookReducer, categories: CategoryReducer },
});
export default store;
