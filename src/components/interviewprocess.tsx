import React from 'react'
import '../css/components/interviewprocess.css';
import Sidebar from '../common/leftsidebar';
import UserProfile from '../common/topbarprofile';
import InterviewTable from '../common/interviewtable';
import { Card } from 'react-bootstrap';

interface InterviewProcessProps {
  logoutUser: () => void;
}

const InterviewProcess: React.FC<InterviewProcessProps> = ({ logoutUser }) => {
  return (
    <div className='whole1'>
      <div className='row'>
        <div className="app-layout1">

          <div className='col-lg-2 sidebarm'>
            <aside className="sidebarK">
              <Sidebar logoutUser={logoutUser} />
            </aside>
          </div>
          

          <div className="col-lg-10 main-content1">

            <div className=' col-lg-7 itopbar'>
              <UserProfile
                name="Sara Abraham"
                designation="View Profile"
                profileImgUrl="https://via.placeholder.com/150" // Replace with actual image URL
              />
            </div>

            <div className="content-sections1">
              <div className='nav-thing'>
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
              </div> 

            <div className='table-thing'>
                <InterviewTable />
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InterviewProcess;