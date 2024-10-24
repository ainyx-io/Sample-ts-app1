import React from 'react'
import './css/App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login Page.tsx/login.tsx'
import Home from './components/Home Page.tsx/Header1.tsx'
import InterviewProcess from './components/Interview Process Page.tsx/InterviewProcess.tsx'
import Candidateprofile from './components/Profile Page.tsx/Main Profile.tsx'
import Sidebar from './components/Login Page.tsx/left sidebar.tsx'
import UserProfile from './components/Login Page.tsx/topbarprofile.tsx'

const App = () => {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="/InterviewProcess ">
            <InterviewProcess />
          </Route>
          <Route path="/Candidateprofile">
            <Candidateprofile/>
          </Route>
        </Switch>
      </BrowserRouter>
   </div>
  );
};


export default App;