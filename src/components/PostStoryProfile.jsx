import React from "react";
import {BsThreeDots} from 'react-icons/bs';

const PostStoryProfile = ({ name }) => {
  return (
    <div className="post-profile">
      <div className="post-container"></div>
      <div className="profile-name">{name}</div>
      <BsThreeDots className='dot-icon'/>
      <div className="post">
        <img src="/src/assets/pizza.jpg" alt='post-img' className="post-img"/>
      </div>
    </div>
  );
};

export default PostStoryProfile;
