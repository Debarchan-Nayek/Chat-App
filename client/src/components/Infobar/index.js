import React from 'react';
import 'react-bootstrap';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import './style.css';

const InfoBar = ({room}) => {
  return(
    <div className="infobar">
        <div className="leftInnerContainer">
          <img className="onlineIcon" src={onlineIcon} alt="online icon" />
          <h3>Room Id: {room}</h3>
        </div>
        <div className="rightInnerContainer">
          <a href="/"><img className="closeIcon" src={closeIcon} alt="close icon" /></a>
        </div>
    </div>
   )
 }

export default InfoBar