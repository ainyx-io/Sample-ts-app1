import React from 'react'
import  Sidebar from './left sidebar.tsx'
import Header from './header2.tsx'
import HireCandidates from './HireCandidates.tsx'
import  RecruitmentProgress from './RecruitmentProgress.tsx'
import UserProfile from './topbarprofile.tsx' 
import Calendar from './Calendar.tsx'
import NewApplicants from './New Applicants.tsx'
import TrainingParticipants from './TrainingParticipants.tsx'
import '../../css/Login Page.css/login.css';


const Login = () => {

  const candidates = [
    { id: 1, role: 'Content Designer', count: 5, iconUrl: '/images/content designer.png' },
    { id: 2, role: 'PHP Developer', count: 8, iconUrl: '/images/web-programming.png' },
    { id: 3, role: 'UI/UX Designer', count: 5, iconUrl: '/images/UIUX.png' },
    { id: 4, role: 'iOS Developer', count: 10, iconUrl: '/images/apple.png' },
    { id: 5, role: 'Android Developer', count: 10, iconUrl: '/images/developer.png' },
  ];

  const progressData = [
    { id: 1, name: 'John Doe', designation: 'UI/UX Designer', status: 'Tech Interview' },
    { id: 2, name: 'Sam Emmanuel', designation: 'UI/UX Designer', status: 'Task' },
    { id: 3, name: 'John Samuel', designation: 'PHP Developer', status: 'Resume Review' },
    { id: 4, name: 'Sam Emmanuel', designation: 'UI/UX Designer', status: 'Final Interview' },
    { id: 5, name: 'John Doe', designation: 'Content Designer', status: 'Tech Interview' },
    { id: 6, name: 'John Samuelee', designation: 'PHP Developer', status: 'Resume Review' },
  ];

  const participants = [
    { id: 1, name: 'Mike Tyson', imgUrl:'/images/mike.png',job:'IOS Developer'},
    { id: 2, name: 'Samuel John', imgUrl: '/images/Samuel.png',job:'Android Developer' },
    { id: 3, name: 'Jiya George', imgUrl: '/images/Jiya.png',job:'UI/UX Designer' },
  ];


  const applicants = [
    { id: 1, name: 'Mike Tyson', designation: 'Applied for:iOS Developer', imgUrl: '/images/mike.png' },
    { id: 2, name: 'Zara Thomas', designation: 'Applied for:Content Designer', imgUrl: '/images/Zara thomas.png' },
    { id: 3, name: 'Neenu Abraham', designation: 'Applied for:Content Designer', imgUrl: '/images/Neenu.png' },
    { id: 4, name: 'John Samuel', designation: 'Applied for:iOS Developer', imgUrl: '/images/John.png' },
    { id: 5, name: 'Zara Thomas', designation: 'Applied for:Content Designer', imgUrl: '/images/Zara1.png'},
    { id: 6, name: 'John Samuel', designation: 'Applied for:iOS Developer', imgUrl: '/images/John.png' }
  ];


  return (
    <div className="app-layout3">
    {/* Sidebar */}
    <aside className="sidebarJ">
       <Sidebar/>
    </aside>

    {/* Main  content area */}
    <main className="main-content0">
          <Header/>
      <div className="content-sections0">
        <div>
          <HireCandidates candidates={candidates}/>
        </div>
        <div>
          <RecruitmentProgress progressData={progressData} />
        </div>
      </div>
    </main>

     {/* Right Sidebar */}
    <aside className="right-sidebar">
    <UserProfile
      name="Sara Abraham" 
      designation="View Profile" 
      profileImgUrl="https://via.placeholder.com/150" // Replace with actual image URL
    />
          <Calendar/>
          <NewApplicants applicants={applicants} />
          <TrainingParticipants participants={participants} /> 
    </aside> 
  </div>
);
};

export default Login;
