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
      <div className="container1">
      <div className="row">
        <div className="col sidebarm">
          <h1>suni</h1>
        </div>
        <div className="col-5 middlem">
          <h1>sunitha</h1>
        </div>
        <div className="col rightm">
          <h1>honey</h1>
        </div>-
      </div>
    </div>
  );
};

export default Dashboard;
