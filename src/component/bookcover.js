import React from "react";
import "./bookcover.css";

function bookcover() {
  return (
    <div className="book-cover">
      <div className="diamond">
        <div className="top-color"></div>
        <div className="middle-color"></div>
        <div className="bottom-color"></div>
      </div>
      <div className="title">HTML&CSS</div>
      <div className="subtitle">design and build websites</div>
      <div className="author">JON DUCKETT</div>
    </div>
  );
}

export default bookcover;
