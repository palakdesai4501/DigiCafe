import React from "react";
import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import PostCard from "./PostCard";

const Title = ({ title, onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className="title-container">
      <h1>{title}</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <BiSearchAlt2 className="search-icon" onClick={handleSearch} />
      </div>
      <PostCard />
    </div>
  );
};

export default Title;
