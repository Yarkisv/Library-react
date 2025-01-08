import React, { useContext, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import Axios from "axios";
import ModalWindowsContext from "../../Contexts/ModalWindowsContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setLoginOpen, setIsAuthenticated } = useContext(ModalWindowsContext);

  const checkUser = async () => {
    try {
      const response = await Axios.post("http://localhost:3000/login", {
        email,
        password,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-wrapper">
        <div className="login">
          <button
            className="modal-close-button"
            onClick={() => setLoginOpen(false)}
          >
            <GrClose />
          </button>
          <h2>Login</h2>
          <form onSubmit={checkUser}>
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
            <div class="input-group">
              <label>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <button type="submit" className="log-in-button">
              Log in
            </button>
          </form>

          {/* <Link to={"/register"} className="redirect-to-register">
            Don't have an account?
          </Link> */}
        </div>
      </div>
    </div>
  );
}
