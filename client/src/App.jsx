import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import MainPage from "./pages/MainPage";
import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ModalWindowsContext from "./Contexts/ModalWindowsContext";
import BookPage from "./pages/BookPage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/home",
    element: <MainPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contacts",
    element: <ContactsPage />
  },
  {
    path: "/book/:title",
    element: <BookPage />,
  },
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
      <RouterProvider router={router} />

      {isLoginOpen && <Login />}
      {isRegisterOpen && <Register />}
    </ModalWindowsContext.Provider>
  );
}

export default App;
