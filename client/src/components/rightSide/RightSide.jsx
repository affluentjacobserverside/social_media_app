import React, {useState} from 'react';
import "./RightSide.css";

import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Commment from "../../img/comment.png";
import {UilSetting} from "@iconscout/react-unicons";
import TrendCard from '../trendCard/TrendCard';
import ShareModal from '../shareModal/ShareModal';


function RightSide() {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="RightSide">
     <div className="navIcons">
      <img src={Home} alt="" />
      <UilSetting/>
      <img src={Noti} alt="" />
      <img src={Commment} alt="" />
     </div>
     <TrendCard/>
     <button className='btn r-btn' onClick={()=>setModalOpened(true)}>Share</button>
     <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>

    </div>
  )
}

export default RightSide