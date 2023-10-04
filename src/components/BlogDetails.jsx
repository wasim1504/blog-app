import React from "react";
import { useParams, Route } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Blog Detail - {id}</h2>
    </div>
  );
};

const Comments = () => {
  return (
    <div>
      <h3>Comments Section </h3>
      {}
    </div>
  );
};

export default BlogDetails;
