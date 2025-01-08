import React, { useEffect, useState } from "react";
import "./book.css";
import axios from "axios";

export default function Books() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/");
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBooks();
  }, []);

  return (
    <div className="books">
      {Books.map((book) => (
        <div className="book">
          <h3>{book.title}</h3>
          <p><strong>Author</strong>{book.author}</p>
          <p><strong>Status</strong>{book.status}</p>
          <p><strong>Description</strong>{book.description}</p>
        </div>
      ))}
    </div>
  );
}
