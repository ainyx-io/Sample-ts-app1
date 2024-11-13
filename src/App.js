import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/login';
import Dashboard from './components/dashboard';
import InterviewProcess from './components/interviewprocess';
import CandidateProfile from './components/candidateprofile';
import Sidebar from './common/leftsidebar';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

// Redirect component
const RedirectToDashboard = () => {
  return <Navigate to="/Dashboard" replace />;
};

function App() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = tokenString ? JSON.parse(tokenString) : null;
    return userToken;
  };

  const [token, setTokenState] = useState(getToken());

  const setToken = (userToken) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setTokenState(userToken);
  };

  const logoutUser = () => {
    setToken(null);
    sessionStorage.removeItem('token');
  };

  if (!token) {
    return <LoginPage setToken={setToken} />;
  }

  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<LoginPage setToken={setToken} />} />
          <Route path="/" element={<RedirectToDashboard />} />
          <Route path="/Dashboard" element={<Dashboard logoutUser={logoutUser} />} />
          <Route path="/InterviewProcess" element={<InterviewProcess />} />
          <Route path="/CandidateProfile" element={<CandidateProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
