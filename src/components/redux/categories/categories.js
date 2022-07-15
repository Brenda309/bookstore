const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

export function addBook() {
  return {
    type: CHECK_STATUS,
  };
}
export default function CategoryReducer(state = [], action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Underconstruction';
    default:
      return state;
  }
}
