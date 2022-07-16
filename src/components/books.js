import './books.css';
import PropTypes from 'prop-types';

const Books = ({
  title, author, id, removeBook,
}) => {
  const deleteBook = (id) => {
    removeBook(id);
  };

  return (
    <section className="books">
      <div className="book">
        <div className="read">
          <h1>{title}</h1>
          <h2>{author}</h2>
        </div>
        <div className="buttons">
          <ul>
            <li>
              <button type="button">Comments</button>
            </li>
            <li>
              <button type="button" onClick={() => deleteBook(id)}>
                Remove
              </button>
            </li>
            <li>
              <button type="button">Edit</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
export default Books;
