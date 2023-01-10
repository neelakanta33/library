import { Routes, Route } from "react-router-dom";
import AdminNavbar from "./adminNavbar";
import AdminDashBoard from "./adminDashBoard";
import BookList from "./bookList";
import UserList from "./userList";
import ReadBook from "./readBook";
import AddUser from "./addUser";
import AddBook from "./addBook";
const AdminPortal = () => {
  return (
    <div className="adminPortal">
      <AdminNavbar />
      <Routes>
        <Route path="/" element={<AdminDashBoard />} />
        <Route path="/book-list" element={<BookList />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/book-list/:id" element={<ReadBook />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/add-book" element={<AddBook />} />


      </Routes>
    </div>
  );
};

export default AdminPortal;
