import React from "react";
import { Link } from "react-router-dom";
import NotFoundCSS from "./NotFound.module.css";
//Notfound page for unmatched routes
function NotFound() {
  return (
    <div className={NotFoundCSS.container}>
      <h1>NotFound</h1>
      <h4>Page that you requested dose not exist</h4>
      <br />
      <span className={NotFoundCSS.back}>
        <Link to='../'>Go back</Link>
      </span>
    </div>
  );
}

export default NotFound;
