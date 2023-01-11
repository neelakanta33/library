import { Link } from "react-router-dom";
import '../styles/userNavbar.css'


const UserNavbar = () => {
  return (
    <div className="userNavbar">
      <div className="logo">
        <h1 id="ad">User </h1>
        <h1>Portal</h1>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="/user/">DASH BOARD</Link>
          </li>

          <li>
            <Link to="/user/book-list">BOOK LIST</Link>
          </li>
        </ul>
      </div>
      <div className="logout">
        <Link id="lo" to="/"> LOGOUT</Link>
      </div>
    </div>
  );
};

export default UserNavbar;
