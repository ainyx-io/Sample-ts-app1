import React from 'react';
import Sidebar from '../Login Page.tsx/left sidebar.tsx';
import CandidateProfile from './card1.tsx';
import InterviewSchedule from './card2.tsx';
import ProfileStatus from './card3.tsx';
import PreviousExperience from './previous experience.tsx';
import UserProfile from '../Login Page.tsx/topbarprofile.tsx';
import { Row, Col, Card } from 'react-bootstrap';
import '../../css/Profile Page.css/Main Profile.css';

const Candidateprofile: React.FC = () => {
  return (
    <div className="app-layout2">
      <aside className="sidebar2">
        <Sidebar />
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
           <CandidateProfile/>
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

export default Candidateprofile;
