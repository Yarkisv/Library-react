import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function BookPage() {
  const [book, setBook] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/book/${id}`);
        setBook(response.data.data[0]);
        console.log(response.data.message);
      } catch (error) {}
    };

    fetchBook();
  }, [id]);

  return (
    <div className="book-page">
      <Header />
      <div className="book-details">
        <h1>{book.title}</h1>
        <p>{book.author}</p>
        <p>{book.published_year}</p>
        <p>{book.genre}</p>
        <p>{book.available}</p>
      </div>
    </div>
  );
}
