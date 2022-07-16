import { getData, removeData, uploadData } from '../../api';

const BOOK_ADDED = 'bookstore/books/BOOK_ADDED';
const BOOK_REMOVED = 'bookstore/books/BOOK_REMOVED';
const READ_BOOKS = 'bookstore/books/READ_BOOKS';

const initialState = [];

// Action
// export function addBook(book) {
//   return {
//     type: BOOK_ADDED,
//     payload: book,
//   };
// }
export const addBook = (book) => async (dispatch) => {
  await uploadData(book);
  dispatch({
    type: BOOK_ADDED,
    payload: book,
  });
};

// export function removeBook(id) {
//   return {
//     type: BOOK_REMOVED,
//     payload: id,
//   };
// }
export const removeBook = (id) => async (dispatch) => {
  await removeData(id);
  dispatch({
    type: BOOK_REMOVED,
    payload: id,
  });
};

export const readBooks = () => async (dispatch) => {
  const books = await getData();
  dispatch({
    type: READ_BOOKS,
    payload: books,
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
    default:
      return state;
  }
}
