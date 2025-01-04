import React from 'react';
import './chatbot.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faCamera } from '@fortawesome/free-solid-svg-icons';
function SideBar(){
  return (
    <div className="sidebar">
    <div className="sidebar-top">
    <FontAwesomeIcon icon={faHome} size="2x" />
      <FontAwesomeIcon icon={faEnvelope} size="2x" />
      <FontAwesomeIcon icon={faCamera} size="2x" />
      <div className="sidebar-icon logo">S</div>
      <div className="sidebar-icon home">🏠</div>
      <div className="sidebar-icon stats">📊</div>
      <div className="sidebar-icon search">🔍</div>
      <div className="sidebar-icon calendar">📅</div>
      <div className="sidebar-icon lightning">⚡</div>
      <div className="sidebar-icon bell">🔔</div>
    </div>
    <div className="sidebar-bottom">
      <div className="sidebar-icon settings">⚙️</div>
      <div className="sidebar-icon profile">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="profile-picture"
        />
      </div>
    </div>
  </div>
  )
}


function ChatBot() {
  return (
    <div><SideBar/></div>
  );
}

export default ChatBot;
