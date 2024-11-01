import React from 'react';
import '../css/common/profilestatus.css';

const ProfileStatus: React.FC = () => {
  return (
    <div className="profile-status-card">
      <h5>Profile Status</h5>
      <div className="concentric-circles">
        <div className="circle outer-circle">
          <div className="circle middle-circle">
            <div className="circle inner-circle"></div>
          </div>
        </div>
      </div>
      <div className="circle-labels">
        <div className="circle-label"><p><span className="bullet bullet-e"></span>Efficiency</p></div>
        <div className="circle-label1"><p><span className="bullet bullet-f"></span>Communication</p></div>
        <div className="circle-label"><p><span className="bullet bullet-g"></span>Skilled</p></div>
      </div>
    </div>
  );
};

export default ProfileStatus;