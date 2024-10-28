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

interface DashboardProps {
  logoutUser: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ logoutUser }) => {
  const participants = [
    { id: 1, name: 'Mike Tyson', imgUrl:'/images/mike.png', job: 'IOS Developer' },
    { id: 2, name: 'Samuel John', imgUrl: '/images/Samuel.png', job: 'Android Developer' },
    { id: 3, name: 'Jiya George', imgUrl: '/images/Jiya.png', job: 'UI/UX Designer' },
  ];

  return (
    <div className="app-layout3">
      {/* Sidebar */}
      <aside className="sidebarJ">
         <Sidebar logoutUser={logoutUser}/>
      </aside>

      {/* Main content area */}
      <main className="main-content0">
        <Searchbar />
        <div className="content-sections0">
          <div>
            <HireCandidates />
          </div>
          <div>
            <RecruitmentProgress/>
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
        <NewApplicants/>
        <TrainingParticipants participants={participants} />
      </aside>
    </div>
  );
};

export default Dashboard;
