import React from 'react'
import Profile from './Profile'

const SideBar = () => {
  return (
    <div className='sidebar'>
      <Profile />
      <div className='container'>
        <div className='logo'>
            <img src="src/assets/Home.png" alt="feed" />
        </div>
        <div className='logo'>
            <img src="src/assets\Explore.png" alt="Explore" />
        </div>
        <div className='logo'>
            <img src="src/assets\Save.png" alt="Save" />
        </div>
        <div className='logo'>
            <img src="src/assets\Messages.png" alt="Messages" />
        </div>
        <div className='logo'>
            <img src="src/assets\People.png" alt="People" />
        </div>
      </div>
    </div>
  )
}

export default SideBar
