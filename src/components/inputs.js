import './input.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { addBook } from './redux/books/books';

const Input = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = () => {
    const mybook = {
      id: Math.floor(Math.random() * 100),
      title,
      author,
      category,
    };
    dispatch(addBook(mybook));
    setTitle('');
    setAuthor('');
  };
  return (
    <div>
      <h1 className="new">Add New BOOK</h1>
      <div className="inputs">
        <div>
          <li>
            <input
              type="text"
              value={title}
              onChange={(e) => handleTitle(e)}
              className="book-title"
              placeholder="Book title"
            />
          </li>
        </div>
        <div>
          <li>
            <input
              type="text"
              value={author}
              onChange={(e) => handleAuthor(e)}
              className="book-author"
              placeholder="Book author"
            />
          </li>
        </div>
        <div>
          <li>
            <select
              id="books"
              name="books"
              placeholder="categories"
              onChange={(e) => handleCategory(e)}
            >
              <option value="categories">categories</option>
            </select>
          </li>
        </div>
        <div>
          <li>
            <button type="button" className="add" onClick={handleSubmit}>
              ADD BOOK
            </button>
          </li>
        </div>
      </div>
    </div>
  );
};
export default Input;
