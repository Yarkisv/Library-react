import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { GrSearch } from "react-icons/gr";
import ModalWindowsContext from "../../Contexts/ModalWindowsContext";
import axios from "axios";

export default function Header() {
  const { setLoginOpen, setRegisterOpen, isAuthenticated, setIsAuthenticated } =
    useContext(ModalWindowsContext);

  const [bookName, setBookName] = useState("");
  const navigate = useNavigate();

  const navigateToBook = (bookName) => {
    navigate(`/book/${bookName}`);
  };

  return (
    <header className="main-header">
      <div className="header-content">
        <div className="input-group">
          <input
            type="text"
            id="book-name"
            name="book-name"
            value={bookName}
            onChange={(event) => setBookName(event.target.value)}
            required
          />
          <button
            className="search-btn"
            onClick={() => navigateToBook(bookName)}
          >
            <GrSearch />
          </button>
        </div>

        <nav className="nav-links">
          <Link to="/home" className="home">
            Home
          </Link>
          <Link to="/contacts" className="contacts">
            Contacts
          </Link>
          <Link to="/about" className="about">
            About
          </Link>
        </nav>

        {!isAuthenticated ? (
          <>
            <button className="login-btn" onClick={() => setLoginOpen(true)}>
              Log in
            </button>

            <button
              className="signin-btn"
              onClick={() => setRegisterOpen(true)}
            >
              Register
            </button>
          </>
        ) : (
          <button
            className="logout-btn"
            onClick={() => setIsAuthenticated(false)}
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
}
