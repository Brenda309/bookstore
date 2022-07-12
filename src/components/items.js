import React from 'react';
import Books from './books';

function Items() {
  const state = {
    books: [
      {
        id: 1,
        title: 'book1',
        Author: 'Author1',
      },
      {
        id: 2,
        title: 'book2',
        Author: 'Author2',
      },
      {
        id: 3,
        title: 'book3',
        Author: 'Author3',
      },
    ],
  };

  return (
    <div>
      {state.books.map(({ id, title, Author }) => (
        <Books key={id} title={title} author={Author} />
      ))}
    </div>
  );
}
export default Items;
