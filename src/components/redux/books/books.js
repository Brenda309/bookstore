const BOOK_ADDED = ' BOOK_ADDED';
const BOOK_REMOVED = ' BOOK_REMOVED';

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
const initialState = {
  books: [],
  newBook: '',
};

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
