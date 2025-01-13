import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import MainPage from "./components/Main page/Main page";
import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ModalWindowsContext from "./Contexts/ModalWindowsContext";
import BookPage from "./components/Book page/Book page";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <MainPage />
      </div>
    )
  },
  {
    path: "/home",
    element: (
      <div>
        <MainPage />
      </div>
    )
  },
  {
    path: "/book/:id",
    element: (
      <div>
        <BookPage/>
      </div>
    )
  }
]);

function App() {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authValues = {
    isLoginOpen,
    setLoginOpen,
    isRegisterOpen,
    setRegisterOpen,
    isAuthenticated,
    setIsAuthenticated,
  };

  return (
    <ModalWindowsContext.Provider value={authValues}>
      <RouterProvider router={router}>
        <div>
          <MainPage />
          {isLoginOpen && <Login />}
          {isRegisterOpen && <Register />}
        </div>
      </RouterProvider>
    </ModalWindowsContext.Provider>
  );
}

export default App;
