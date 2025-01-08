import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./Register.css";
import { GrClose } from "react-icons/gr";
import ModalWindowsContext from "../../Contexts/ModalWindowsContext";

export default function Register() {
  const { setRegisterOpen, setIsAuthenticated } =
    useContext(ModalWindowsContext);

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const insertUser = async () => {
    try {
      await Axios.post("http://localhost:3000/register", {
        email,
        userName,
        password,
        role,
      });
      setEmail("");
      setUserName("");
      setPassword("");
      setRole("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-wrapper">
        <div className="register">
          <button
            className="modal-close-button"
            onClick={() => setRegisterOpen(false)}
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
            <div class="input-group">
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
            <div class="input-group">
              <label>Role</label>
              <input
                type="text"
                id="role"
                name="role"
                value={role}
                onChange={(event) => setRole(event.target.value)}
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
