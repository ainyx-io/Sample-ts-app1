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
import {Card} from 'react-bootstrap';

interface DashboardProps {
  logoutUser: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ logoutUser }) => {
    return (
    <div className='whole'>
    <Card className='main-card1'>
    <div className="app-layout3">
      {/* Sidebar with logout functionality */}
      <aside className="sidebarK">
         <Sidebar logoutUser={logoutUser} />
      </aside>

      {/* Main content area */}
      <main className="main-content0">
        <Searchbar />
        <div className="content-sections0">
          <div>
            <HireCandidates />
          </div>
          <div>
            <RecruitmentProgress />
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="right-sidebar">
        <UserProfile
          name="Sara Abraham"
          designation="View Profile"
          profileImgUrl="https://via.placeholder.com/150"
        />
        <Calendar />
        <NewApplicants />
        <TrainingParticipants />
      </aside>
    </div>
    </Card>
    </div>
  );
};

export default Dashboard;
