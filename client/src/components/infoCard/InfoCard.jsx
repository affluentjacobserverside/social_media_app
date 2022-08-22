import React from 'react';
import "./InfoCard.css";
import {UilPen} from "@iconscout/react-unicons";
import { useState } from 'react';
import ProfileModal from '../profileModal/ProfileModal';

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
            
        <UilPen width='2rem' height='1.2rem' onClick={()=>setModalOpened(true)}/>
        <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
        </div> 
     </div> 
      <div className="info">
        <span>
            <b>Status </b>
        </span>
        <span>In Relationship</span>
      </div>
      <div className="info">
        <span>
            <b>Lives In </b>
        </span>
        <span>Canada</span>
      </div>
      <div className="info">
        <span>
            <b>Works At </b>
        </span>
        <span>Microsoft</span>
      </div>
      <button className="btn logout-btn">Logout</button>
    </div>
  )
}

export default InfoCard