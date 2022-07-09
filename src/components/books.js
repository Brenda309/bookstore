import './books.css';
import PropTypes from 'prop-types';

const Books = ({ title, author }) => (
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
            <button type="button">Remove</button>
          </li>
          <li>
            <button type="button">Edit</button>
          </li>
        </ul>
      </div>
    </div>
  </section>
);
Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Books;
