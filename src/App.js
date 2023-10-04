import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import BlogList from "./components/BlogList";
import Login from "./components/Login";
import BlogDetails from "./components/BlogDetails";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/blog-list"
          element={<PrivateRoute Component={BlogList} />}
        />
        <Route
          path="/blog-detail/:id"
          element={<PrivateRoute Component={BlogDetails} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
