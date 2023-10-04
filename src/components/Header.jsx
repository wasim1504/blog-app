import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Import the CSS file

const Header = () => {
  return (
    <header className="header-container">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog-list">Blog List</Link>
          </li>
          <li>
            <Link to="/blog-detail/:id">Blog Details</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
