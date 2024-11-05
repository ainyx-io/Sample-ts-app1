import React from 'react';
import { FaCog, FaBell } from 'react-icons/fa'; // Icons for settings and notification
import '../css/common/topbarprofile.css';

// Define the props for type checking
interface UserProfileProps {
  name: string;
  designation: string;
  profileImgUrl: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, designation, profileImgUrl }) => {
  return (
    <div className="top-bar">
      <div className="top-right-icons">
       <div className="user-profile">
      {/* Notification and settings icons */}
         <div className="icons">
         <FaCog className="settings-icon" />
        <FaBell className="notification-icon" />
       </div> 
      
      {/* User info: profile picture, name, and designation */}
       <div className="profile-info"> 
          <div className="user-details">
            <h4 className="user-name">{name}</h4>
            <h6 className="user-designation">{designation}</h6>
          </div>
        <img src={profileImgUrl} alt="User profile" className="profile-img" />
        </div>
       </div>
      </div>
    </div>
  );
};

export default UserProfile;
