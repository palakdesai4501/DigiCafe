import React from "react";
import Profile from "./Profile";

const SideBar = () => {
    return (
        <div className="sidebar">
            <Profile />
            <div className="container">
                <button className="category-btn">
                    <img src="src/assets/Home.png" alt="feed" height='50px' width='50px' />
                    <span>Feed</span>
                </button>

                <button className="category-btn">
                    <img src="src/assets/Explore.png" alt="Explore" height='50px' width='50px' />
                    <span>Explore</span>
                </button>

                <button className="category-btn">
                    <img src="src/assets/Save.png" alt="Save" height='50px' width='50px' />
                    <span>Save</span>
                </button>

                <button className="category-btn">
                    <img src="src/assets/Messages.png" alt="Messages" height='50px' width='50px' />
                    <span>Messages</span>
                </button>

                <button className="category-btn">
                    <img src="src/assets/People.png" alt="People" height='50px' width='50px' />
                    <span>People</span>
                </button>
            </div>
        </div>
    );
};

export default SideBar;
