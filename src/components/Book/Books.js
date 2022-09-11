import React, { useEffect, useState } from "react";
import "./Book.css";
import axios from "axios";
import Book from "./Book";
const URL = process.env.REACT_APP_BACKEND_URL + "/books";
const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
};
const Books = () => {
    const [books, setBooks] = useState();
    useEffect(() => {
        fetchHandler().then((data) => setBooks(data.books));
    }, []);
    console.log(books);
  return ( 
    <div>
      <ul>
        {books && books.map((book, i) => (
          <li key={i}>
            <Book book={book}/>
            {/* <Book book={book} setBooks={setBooks}/> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;