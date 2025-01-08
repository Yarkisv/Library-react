import React, { useState } from "react";
import Header from "../Header/Header";
import BooksContainer from "../Books Container/Books container";

export default function MainPage() {
  return (
    <div className="main-page">
      <Header/>
      <BooksContainer />
    </div>
  );
}
