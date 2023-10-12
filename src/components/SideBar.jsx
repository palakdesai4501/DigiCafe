import React from "react";
import Profile from "./Profile";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Profile />
      <div className="container">
        <button className="category-btn">
          <img
            src="src/assets/Home.png"
            alt="feed"
            height="40px"
            width="40px"
          />
          <span>Feed</span>
        </button>

        <button className="category-btn">
          <img
            src="src/assets/Explore.png"
            alt="Explore"
            height="40px"
            width="40px"
          />
          <span>Explore</span>
        </button>

        <button className="category-btn">
          <img
            src="src/assets/Save.png"
            alt="Save"
            height="40px"
            width="40px"
          />
          <span>Save</span>
        </button>

        <button className="category-btn">
          <img
            src="src/assets/Messages.png"
            alt="Messages"
            height="40px"
            width="40px"
          />
          <span>Messages</span>
        </button>

        <button className="category-btn">
          <img
            src="src/assets/People.png"
            alt="People"
            height="40px"
            width="40px"
          />
          <span>People</span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
