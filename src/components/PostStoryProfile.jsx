import React from "react";
import {BsThreeDots} from 'react-icons/bs';

const PostStoryProfile = ({ name }) => {
  return (
    <div className="post-profile">
      <div className="post-container"></div>
      <div className="profile-name">{name}</div>
      <BsThreeDots className='dot-icon'/>
    </div>
  );
};

export default PostStoryProfile;
