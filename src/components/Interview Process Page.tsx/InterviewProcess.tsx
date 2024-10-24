import React from 'react'
import  Sidebar from '../Login Page.tsx/left sidebar.tsx';
import UserProfile from '../Login Page.tsx/topbarprofile.tsx';
import Interviewprocess from './Interview table.tsx'
import '../../css/Interview Process Page.css/InterviewProcess.css';

const InterviewProcess = () => {
  return (
    <div className="app-layout1">
    <aside className="sidebar1">
       <Sidebar/>
    </aside>
     
    <main className="main-content1">
    <UserProfile
      name="Sara Abraham" 
      designation="View Profile" 
      profileImgUrl="https://via.placeholder.com/150" // Replace with actual image URL
    />
      <div className="content-sections1">
             {/* Navigation Tabs */}
             <ul className="nav">
            <li className="nav-item1">
              <a className="nav-link active" href="#">All Candidates</a>
            </li>
            <li className="nav-item2">
              <a className="nav-link" href="#">Ongoing</a>
            </li>
            <li className="nav-item3">
              <a className="nav-link" href="#">Completed</a>
            </li>
          </ul>
          <Interviewprocess/>
        </div>
    </main>
  </div>

);
};
 
export default InterviewProcess ;