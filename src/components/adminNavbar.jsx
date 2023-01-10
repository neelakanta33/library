import "../styles/adminNavbar.css";
import { Link } from "react-router-dom";
const AdminNavbar = () => {
  return (
    <div className="adminNav">
      <div className="logo">
        <h1 id="ad">Admin </h1>
        <h1>Portal</h1>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="/admin/">DASH BOARD</Link>
          </li>
          <li>
            <Link to="/admin/add-book">ADD BOOK</Link>
          </li>
          <li>
            <Link to="/admin/add-user">ADD USER</Link>
          </li>
          <li>
            <Link to="/admin/book-list">BOOK LIST</Link>
          </li>
          <li>
            <Link to="/admin/user-list">USER LIST</Link>
          </li>
        </ul>
      </div>
      <div className="logout">
        <Link id="lo" to="/">
          LOGOUT
        </Link>
      </div>
    </div>
  );
};

export default AdminNavbar;
