import React from "react";

const Title = ({ title }) => {
  return (
    <div className="title-container">
      <h1>{title}</h1>
      <div>
        <input type="text" className="search-bar" placeholder="Search..." />
      </div>
    </div>
  );
};

export default Title;
