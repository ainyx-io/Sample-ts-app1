import React, {useState, useEffect} from 'react'
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

  const [candidates, setCandidates] = useState<Candidate[]>([]);
  interface Candidate {
    id: number;
    role: string;
    count: number;
    iconUrl: string;
  }
  
  const [progressdata, setProgressdata] = useState<Progressdata[]>([]);
  interface Progressdata {
    id: number;
    name: string;
    designation: string;
    status: string;
  }
  
 
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

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/candidates');
        const data = await response.json();
        setCandidates(data);
      } catch (error) {
        console.error('Error fetching candidates data:', error);
      }
    };

    const fetchProgressData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/progressdata');
        const data = await response.json();
        setProgressdata(data);
      } catch (error) {
        console.error('Error fetching progressdata:', error);
      }
    };

    fetchCandidates();
    fetchProgressData();
  }, []);

  return (
    <div className="app-layout3">
    {/* Sidebar */}
    <aside className="sidebarJ">
       <Sidebar logoutUser={logoutUser}/>
    </aside>

    {/* Main  content area */}
    <main className="main-content0">
          <Searchbar/>
      <div className="content-sections0">
        <div>
          <HireCandidates candidates={candidates}/>
        </div>
        <div>
          <RecruitmentProgress progressdata={progressdata} />
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

export default Dashboard;
