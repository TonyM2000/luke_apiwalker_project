import image from "../images/NotTheDroids.webp";
import React from "react";

function NotFound() {
  return (
    <div className="card mt-3">
      <img src={image} alt="Not Found" className="card-img-top" />
      <div className="card-body">
        <h1>Not Found</h1>
      </div>
    </div>
  );
}

export default NotFound;
