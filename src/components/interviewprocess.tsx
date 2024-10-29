import React from 'react'
import '../css/components/interviewprocess.css';
import Sidebar from '../common/leftsidebar';
import UserProfile  from '../common/topbarprofile';
import InterviewTable from '../common/interviewtable';

interface InterviewProcessProps {
  logoutUser: () => void;
}

const InterviewProcess : React.FC<InterviewProcessProps> = ({ logoutUser }) => {
  return (
    <div className="app-layout1">
    <aside className="sidebar1">
       <Sidebar logoutUser={logoutUser} />
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
          <InterviewTable/>
        </div>
    </main>
  </div>

);
};
 
export default InterviewProcess ;