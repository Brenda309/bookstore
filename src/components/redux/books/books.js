import { getData, removeData, uploadData } from '../../api';

const BOOK_ADDED = 'bookstore/books/BOOK_ADDED';
const BOOK_REMOVED = 'bookstore/books/BOOK_REMOVED';
const READ_BOOKS = 'bookstore/books/READ_BOOKS';

const initialState = [];

export const addBook = (book) => async (dispatch) => {
  await uploadData(book);
  dispatch({
    type: BOOK_ADDED,
    payload: book,
  });
};

export const readBooks = () => async (dispatch) => {
  const books = await getData();
  dispatch({
    type: READ_BOOKS,
    payload: books,
  });
};

export const removeBook = (id) => async (dispatch) => {
  await removeData(id);
  dispatch({
    type: BOOK_REMOVED,
    payload: id,
  });
};
// Redurers

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case BOOK_ADDED: {
      return [...state, action.payload];
    }
    case BOOK_REMOVED: {
      const newList = state.filter((book) => book.id !== action.payload);
      return newList;
    }
    case READ_BOOKS: {
      return action.payload;
    }
    default:
      return initialState;
  }
}
