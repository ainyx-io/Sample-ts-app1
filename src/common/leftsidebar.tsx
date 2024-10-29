import React, { useCallback } from 'react';
import { MdDashboard, MdPersonSearch, MdQuestionAnswer, MdAssignment, MdTaskAlt, MdCalendarToday, MdSchool } from 'react-icons/md';
import { IoMdLogOut } from 'react-icons/io';
import '../css/common/leftsidebar.css';
import { useNavigate } from 'react-router-dom';


interface SidebarProps {
  logoutUser: () => void;
}


const Sidebar: React.FC<SidebarProps> = ({ logoutUser }) => {
  const navigate = useNavigate();


  // useCallback to wrap logoutUser for stability
  const handleLogout = useCallback(() => {
    logoutUser();
    navigate('/Login'); // Redirect to login after logout
  }, [logoutUser, navigate]);


  return (
    <div className="sidebarI">
      <h2 className="sidebar-title">
        <img src="/images/logo.png" alt="Logo" />
        Hireism
      </h2>
      <div className="sidebar-part">
        <ul className="sidebar-menu">
          <li className="sidebar-item1" style={{ backgroundColor: '#9FB4EF' }}>
            <MdDashboard className="sidebar-icon1" style={{ color: '#3F6AD8' }} />
            <span style={{ color: '#6F8FE4' }}>Dashboard</span>
          </li>
          <li className="sidebar-item2">
            <MdPersonSearch className="sidebar-icon2" />
            <span>Recruitment</span>
          </li>
          <li className="sidebar-item3">
            <MdQuestionAnswer className="sidebar-icon3" />
            <span>Interview</span>
          </li>
          <li className="sidebar-item4">
            <MdAssignment className="sidebar-icon4" />
            <span>Onboarding</span>
          </li>
          <li className="sidebar-item5">
            <MdTaskAlt className="sidebar-icon5" />
            <span>Interview Task</span>
          </li>
          <li className="sidebar-item6">
            <MdCalendarToday className="sidebar-icon6" />
            <span>Appointments</span>
          </li>
          <li className="sidebar-item7">
            <MdSchool className="sidebar-icon7" />
            <span>Training</span>
          </li>
        </ul>
      </div>
      <div className="logout">
        <IoMdLogOut className="sidebar-icon8" />
        <button onClick={handleLogout} className="btn btn-light">Logout</button>
      </div>
    </div>
  );
};


export default Sidebar;
