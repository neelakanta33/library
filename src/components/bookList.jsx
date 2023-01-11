import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/bookList.css";

const BookList = () => {
  //useloaction (fetchs total path )
  let [books, setBooks] = useState([]);
  let location = useLocation();
  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch("http://localhost:1006/books");
      let data = await response.json();
      setBooks(data);
    };
    fetchData();
  }, [books]);

  //delete a book from server
  let remove = (title, id) => {
    fetch(`http://localhost:1006/books/${id}`, {
      method: "DELETE",
    });
    alert(`${title} will be deleted permanently`);
  };
  let navigate = useNavigate();
  let read = (id) => {
if (location.pathname=='/admin/book-list') {
  navigate(`/admin/book-list/${id}`);

} else {
  navigate(`/user/book-list/${id}`)
}
  };
  return (
    <div className="bookList">
      <h1 id="hea">Book List:{books.length}</h1>
      <div className="books_section">
        {books.map((x) => (
          <div className="block">
            <div className="image">
              <Link to="http://">
                <img src={x.thumbnailUrl} alt="" />
              </Link>
            </div>
            <div className="book">
              <h1 id="hed">{x.title}</h1>
              <p>
                <b>Authors:</b>
                {x.authors.toString()}
              </p>
              <p>
                <b>PageCount:</b>
                {x.pageCount}
              </p>
              <p>
                <b>categories:</b>
                {x.categories}
              </p>
              <button id="but" onClick={() => read(x.id)}>
                Read More
              </button>

              {location.pathname == "/admin/book-list" && (
                <button id="but" onClick={() => remove(x.title, x.id)}>
                  Delete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
