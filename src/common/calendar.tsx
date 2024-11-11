import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import '../css/common/calendar.css';

const dates = [
  { day: 'Mon', date: 22 },
  { day: 'Tue', date: 23 },
  { day: 'Wed', date: 24 },
  { day: 'Thu', date: 25 },
  { day: 'Fri', date: 26 },
];

const Calendar = () => {
  return (
  <div className='col-lg-9 IJ1' style={{minHeight: '13vh',minWidth:'19vw'}}>
    <div className='w'>
      <h6>Schedule Calendar</h6>
      <button className="Dbtn-primary" type="button">May</button>
    </div>
     <div className="col-lg-12 schedule-calendar">
  <div className="Scard">
    <span className="day">Mon</span>
    <span className="number">22</span>
  </div>
  <div className="Scard">
    <span className="day">Tue</span>
    <span className="number">23</span>
  </div>
  <div className="Scard">
    <span className="day">Wed</span>
    <span className="number">24</span>
  </div>
  <div className="Scard">
    <span className="day">Thu</span>
    <span className="number">25</span>
  </div>
  <div className="Scard">
    <span className="day">Fri</span>
    <span className="number">26</span>
  </div>
</div>

  </div>
  );
};

export default Calendar;
