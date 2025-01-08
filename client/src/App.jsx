import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import MainPage from "./components/Main page/Main page";
import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ModalWindowsContext from "./Contexts/ModalWindowsContext";

const router = createBrowserRouter([
  {
    path: "/home",
    element: (
      <div>
        <MainPage />
      </div>
    ),
  },
  {
    path: "/contacts",
    element: (
      <div>
        <Login />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Register />
      </div>
    ),
  },
]);

function App() {
  const [isLoginOpen, setLoginOpen] = useState(false)
  const [isRegisterOpen, setRegisterOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  const authValues = {
    isLoginOpen,
    setLoginOpen,
    isRegisterOpen,
    setRegisterOpen,
    isAuthenticated,
    setIsAuthenticated
  }

  return (
    <ModalWindowsContext.Provider value={authValues}>
      <div>
        <MainPage />
        {isLoginOpen && <Login />}
        {isRegisterOpen && <Register />}
      </div>
    </ModalWindowsContext.Provider>
  );
}

export default App;