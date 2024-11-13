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
       
        <div className="col-lg-5 middlem" style={{ minHeight: '100vh'}} >
          <div className='col-lg-11 topone' style={{ minHeight: '30vh' }}>
            <Searchbar />
          </div>

          <div className='col-lg-11 middleone' style={{ minHeight: '30vh' }}>
            <HireCandidates />
          </div>

          <div className='col-lg-11 bottomone' style={{ minHeight: '30vh' }} >
            <RecruitmentProgress />
          </div>
        </div>


        <div className="col-lg-1 rightm"  style={{ minHeight: '100vh'}}>
         
            <UserProfile
              name="Sara Abraham"
              designation="View Profile"
              profileImgUrl="https://via.placeholder.com/150" // Replace with actual image URL
            />
          <div className='col-lg-10 threethings' style={{ minHeight: '80vh' }}>
          <div className='rightm2' style={{ minHeight: '22vh',minWidth:'17vw' }} >
            <Calendar />
          </div>
          <div className='rightm3' style={{ minHeight: '30vh',minWidth:'17vw'}}>
            <NewApplicants />
          </div>

          <div className='rightm4' style={{ minHeight: '30vh',minWidth:'27vw' }} >
            <TrainingParticipants />
          </div>
          </div>
        </div>

        </div>
   
    </div >
  );
};

export default Dashboard;
