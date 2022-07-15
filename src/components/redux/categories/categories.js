const CHECK_STATUS = 'CHECK_STATUS';

export function addBook() {
  return {
    type: CHECK_STATUS,
  };
}
export default function reducer(state = [], action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Underconstruction';
    default:
      return state;
  }
}
