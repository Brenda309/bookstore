const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';
const initialState = '';
export function checkStatus() {
  return {
    type: CHECK_STATUS,
  };
}
export default function CategoryReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}
