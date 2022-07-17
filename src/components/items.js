import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Books from './books';
import { readBooks, removeBook } from './redux/books/books';

function Items() {
  const books = useSelector((state) => state.bookStores);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readBooks());
  }, []);

  const handleDelete = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      {books.map(({ title, author, id }) => (
        <Books
          key={id}
          id={id}
          title={title}
          author={author}
          removeBook={handleDelete}
        />
      ))}
    </div>
  );
}
export default Items;
