import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import '../css/components/candidateprofile.css';
import Sidebar from '../common/leftsidebar';
import Profiledata from '../common/profiledata';
import InterviewSchedule from '../common/interviewschedule';
import ProfileStatus from '../common/profilestatus';
import PreviousExperience from '../common/previousexperience';
import UserProfile from '../common/topbarprofile';


interface CandidateProfileProps {
  logoutUser: () => void;
}

const CandidateProfile: React.FC<CandidateProfileProps> = ({ logoutUser }) => {
  
  return (
    <div className="app-layout2">
      <aside className="sidebar2">
        <Sidebar logoutUser={logoutUser} />
      </aside>
      <main className="main-content2">
      <UserProfile
        name="Sara Abraham" 
        designation="View Profile" 
        profileImgUrl="https://via.placeholder.com/150" // Replace with actual image URL
      />
            
        <div className="content-sections2">
        <Row>
        <Col md={4}>
         <div className='a1'>
           <Profiledata/>
        </div>
       </Col>
     <Col md={4}>
       <div className='b1'>
         <InterviewSchedule />
       </div>
     </Col>
     <Col md={4}>
     <div className='c1'>
         <ProfileStatus />
     </div>
     </Col>
     </Row>
     </div>
          <PreviousExperience />
      </main>
      </div>
  );
};

export default CandidateProfile;
