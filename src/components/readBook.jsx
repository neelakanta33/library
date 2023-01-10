import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/readBook.css'
const ReadBook = () => {
  let [book,setBook] = useState([]);
  //to get router parameter
  let params = useParams();
  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch(`http://localhost:1006/books/${params.id}`);
      let data =await response.json();
      setBook(data);
    };
    fetchData();
  },[]);
  return (
    <div className="readBook">
      <div className="details">
        <h1>Title:{book.title}</h1>
        <p>{book.shortDescription}</p>
        <p>{book.longDescription}</p>
      </div>
    </div>
  );
};

export default ReadBook;
