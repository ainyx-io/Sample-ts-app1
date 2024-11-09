import React from 'react';
import Calendar from '../common/calendar';
import Sidebar from '../common/leftsidebar';
import Searchbar from '../common/searchbar';
import HireCandidates from '../common/hirecandidates';
import RecruitmentProgress from '../common/recruitmentprogress';
import UserProfile from '../common/topbarprofile';
import NewApplicants from '../common/newapplicants';
import TrainingParticipants from '../common/trainingparticipants';
import '../css/components/dashboard.css';
import { Card } from 'react-bootstrap';

interface DashboardProps {
  logoutUser: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ logoutUser }) => {
  return (
    <div className="container1">
      <div className="row">
        <div className="col-lg-1 sidebarm">
          <aside className="sidebarK">
            <Sidebar logoutUser={logoutUser} />
          </aside>
        </div>
        <div className="col-lg-5 middlem">
          <div className='col-lg-11 topone' style={{height: '30vh'}}>
          <Searchbar />
          </div>
          <div className='col-lg-11 middleone' style={{height: '30vh'}}>
          <HireCandidates />
          </div>
          
          </div>
           {/* 
          <div>
            <RecruitmentProgress />
          </div>
        </div> */}
        
        <div className="col-lg-1 rightm">
          <h1>honey</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
