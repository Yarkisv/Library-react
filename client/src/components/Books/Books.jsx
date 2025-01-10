import React, { useEffect, useState } from "react";
import "./books.css";
import axios from "axios";

export default function Books() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/");
        setBook(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    getAllBooks();
  }, []);

  return (
    <div className="books">
      {book.map((book) => (
        <div className="book-card" key={book.id}>
          <h3>{book.title}</h3>
          <p>
            {book.author}
          </p>
          <p>
            {book.published_year}
          </p>
          <p>
            {book.genre}
          </p>
          <p>
            {book.status}
          </p>
        </div>
      ))}
    </div>
  );
}
