import React from 'react'
import RightSide from '../../components/rightSide/RightSide';
import PostSide from '../../components/postSide/PostSide';
import ProfileSide from '../../components/profileSide/ProfileSide';
import "./Home.css";

function Home() {
  return (
    <div className="Home">
    <ProfileSide/>
    <PostSide/>
    <RightSide/>
    </div>
  )
}

export default Home