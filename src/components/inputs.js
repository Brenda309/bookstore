import './input.css'
const Input = () => {
  return (
    <div className="inputs">
      <div>
        <li>
          <input type="text" className="book-title" placeholder="Book title" />
        </li>
      </div>
      <div>
        <li>
          <select id="books" name="books" placeholder="categories">
            <option value="categories">categories</option>
          </select>
        </li>
      </div>
      <div>
        <li>
          <input className="add" type="button" value="Add book" />
        </li>
      </div>
    </div>
  );
};

export default Input;
