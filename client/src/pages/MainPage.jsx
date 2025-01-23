import React from "react";
import Header from "../components/Header/Header";
import BooksContainer from "../components/Books container/Books container";

export default function MainPage() {
  return (
    <div className="main-page">
      <Header />
      <BooksContainer />
    </div>
  );
}
