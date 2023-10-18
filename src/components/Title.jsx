import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const Title = ({ title }) => {
  return (
    <div className="title-container">
      <h1>{title}</h1>
      <div className="search-container">
        <input type="text"  placeholder="Search..." />
      
          <BiSearchAlt2  className="search-icon"/>
    
      </div>
    </div>
  );
};

export default Title;
