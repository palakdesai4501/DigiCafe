import React from "react";
import Profile from "./Profile";
import { items } from "../utils/constants";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Profile />
      <div className="container">
        {items.map((item, index) => (
          <button key={index} className="category-btn">
            {item.icon}
            <span>{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
