import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import BooksContainer from "../Books container/Books container";

export default function MainPage() {
  return (
    <div className="main-page">
      <Header />
      <BooksContainer />
    </div>
  );
}
