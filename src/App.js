import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/login';
import Dashboard from './components/dashboard';
import InterviewProcess from './components/interviewprocess';
import CandidateProfile from './components/candidateprofile';
import Sidebar from './common/leftsidebar';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

//Redirect component
const RedirectToDashboard = () => {
  return <Navigate to="/Dashboard" replace />;
};

function App() {
  const [token, setTokenState] = useState(getToken());

  // Set token in session storage and state
  const setToken = (userToken) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setTokenState(userToken);
  }

  function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = tokenString ? JSON.parse(tokenString) : null;
    return userToken?.token;
  }

  // Logout function to clear token and update state
  const logoutUser = () => {
    sessionStorage.removeItem('token');
    setTokenState(null);
  };

  if (!token) {
    return <LoginPage setToken={setToken} />;
  }

  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" Component={LoginPage} />
          <Route path="/" Component={RedirectToDashboard} /> 
           <Route path="/Dashboard" Component={() => <Dashboard logoutUser={logoutUser} />} />
          <Route path="/Dashboard" Component={Dashboard} />
          <Route path="/InterviewProcess" Component={InterviewProcess} />
          <Route path="/CandidateProfile" Component={CandidateProfile} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;