import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";
const Book = (props) => {

  const URL = process.env.REACT_APP_BACKEND_URL + "/books";
  const fetchHandler = async () => {
      return await axios.get(URL).then((res) => res.data);
  };
  const history = useNavigate();
  const { _id, name, author, description, price, image} = props.book;
  // const {setBooks} = props;
  const deleteHandler = async () => {
    await axios.delete(process.env.REACT_APP_BACKEND_URL + `/books/${_id}`).then(res => res.data).then(() => history("/")).then(() => history("/books"));
    // console.log(setBooks)
    // fetchHandler().then((data) => setBooks([...data.books]));
  };
  return (
  <div className="card">
    <img src={image} alt={name} />
    <article>By {author}</article>
    <h3>{name}</h3>
    <p>{description}</p>
    <h3>Rs {price}</h3>
    <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto"}}>Update</Button>
    <Button color="error" onClick={deleteHandler} sx={{ mt: "auto"}}>Delete</Button>
  </div>
  );
};

export default Book;