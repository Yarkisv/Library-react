import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";
import { GrClose } from "react-icons/gr";
import ModalWindowsContext from "../../Contexts/ModalWindowsContext";

export default function Register() {
  const { setRegisterOpen, setIsAuthenticated } =
    useContext(ModalWindowsContext);

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const insertUser = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/register", {
        email,
        userName,
        password
      });
      setEmail("");
      setUserName("");
      setPassword("");

      if (response.status === 200 || response.data.success) {
        setIsAuthenticated(true);
        setRegisterOpen(false);
        console.log("Registration successful!");
      } else {
        console.error("Registation failed: ", response.data.message);
      }
    } catch (error) {
      console.error("Error during register request");
    }
  };

  return (
    <div className="modal">
      <div className="modal-wrapper">
        <div className="register">
          <button
            className="modal-close-button"
            onClick={() => {
              setRegisterOpen(false);
              console.log("Register is clicked");
            }}
          >
            <GrClose />
          </button>
          <h2>Register</h2>
          <form onSubmit={insertUser}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="text"
                id="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            
            <button type="submit" className="sign-in-button">
              Register
            </button>
          </form>

          {/* <Link to={"/login"}>
            <a className="redirect-to-login">Allready have an account?</a>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
