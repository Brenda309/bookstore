import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <section className="navbar">
    <div>
      <h1 className="title-books">Bookstore CMS</h1>
    </div>
    <div className="links">
      <ul className="list">
        <li>
          <Link className="books" to="/" style={{ textDecoration: 'none', color: 'black' }}>
            Books
          </Link>
        </li>
        <li className="category">
          <Link to="/category" style={{ textDecoration: 'none', color: 'black' }}>
            Category
          </Link>
        </li>
      </ul>
    </div>
  </section>
);
export default Navbar;
