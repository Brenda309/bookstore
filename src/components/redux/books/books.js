const BOOK_ADDED = 'bookstore/books/BOOK_ADDED';
const BOOK_REMOVED = 'bookstore/books/BOOK_REMOVED';

const initialState = [
  {
    id: 1,
    title: 'title one',
    author: 'author one',
  },
  {
    id: 2,
    title: 'title two',
    author: 'Author two',
  },
];

// Action
export function addBook(book) {
  return {
    type: BOOK_ADDED,
    payload: book,
  };
}
export function removeBook(id) {
  return {
    type: BOOK_REMOVED,
    payload: id,
  };
}
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
