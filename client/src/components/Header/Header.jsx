import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import ModalWindowsContext from "../../Contexts/ModalWindowsContext";

export default function Header() {
  const { setLoginOpen, setRegisterOpen, isAuthenticated, setIsAuthenticated } =
    useContext(ModalWindowsContext);

  return (
    <header className="main-header">
      <div className="header-content">
        <h1>Welcome to the Books Page</h1>
        <nav className="nav-links">
          <Link to="/home" className="home">
            Home
          </Link>
          {/* <Link to="/contacts" className="contacts">
            Contacts
          </Link>
          <Link to="/about" className="about">
            About
          </Link> */}
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
