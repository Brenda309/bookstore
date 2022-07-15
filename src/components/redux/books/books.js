const BOOK_ADDED = 'bookstore/books/BOOK_ADDED';
const BOOK_REMOVED = 'bookstore/books/BOOK_REMOVED';

const initialState = {
  books: [],
  newBook: '',
};

export function addBook() {
  return {
    type: BOOK_ADDED,
  };
}
export function removeBook() {
  return {
    type: BOOK_REMOVED,
  };
}
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case BOOK_ADDED:
      return {
        ...state,
        newBook: '',
      };

    case BOOK_REMOVED:
      return {
        ...state,
        newBook: '',
      };
    default:
      return state;
  }
}
