import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/login';
import Dashboard from './components/dashboard';
import InterviewProcess from './components/interviewprocess';
import CandidateProfile from './components/candidateprofile';
import Sidebar from './common/leftsidebar';
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';


// Redirect component
const RedirectToDashboard = () => {
  return <Navigate to="/Dashboard" replace />;
};




function App() {
  // Define getToken before using it in the component
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = tokenString ? JSON.parse(tokenString) : null;
    return userToken;
  };

  const [token, setTokenState] = useState(getToken());

  // Set token in session storage and state
  const setToken = (userToken) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setTokenState(userToken);
  };

 
    const logoutUser = () => {
      setToken(null); // Clear the token state
      sessionStorage.removeItem('token'); // Clear the token from session storage
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
          <Route path="/InterviewProcess" Component={InterviewProcess} />
          <Route path="/CandidateProfile" Component={CandidateProfile} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
