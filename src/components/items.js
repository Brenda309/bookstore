import React, { useState } from 'react';
import Books from './books';

function Items() {
  const bookstores = () => {
    const books = [
      {
        id: 1,
        title: 'book1 ',
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
    ];
    return books;
  };
  const [books] = useState(bookstores());
  return (
    <div>
      {books.map(({ id, title, Author }) => (
        <Books key={id} title={title} author={Author} />
      ))}
    </div>
  );
}
export default Items;
