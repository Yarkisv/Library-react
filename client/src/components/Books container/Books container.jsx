import React from "react";
import "./books container.css";

export default class BooksContainer extends React.Component {
  render() {
    return <div className="books-container">{this.props.children}</div>;
  }
}
