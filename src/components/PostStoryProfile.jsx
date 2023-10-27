import React from "react";

const PostStoryProfile = ({ name }) => {
  return (
    <div className="post-profile">
      <div className="post-container"></div>
      <div className="profile-name">{name}</div>
    </div>
  );
};

export default PostStoryProfile;
