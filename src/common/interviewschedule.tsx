import React from 'react';
import '../css/common/interviewschedule.css';


const InterviewSchedule: React.FC = () => {
    return (
        <div className="col-lg-3 interview-schedule-card" style={{minHeight:"37vh", minWidth:"19vw"}}>
            <h4>Interview Schedule</h4>
            <div className='data-and-dates'>
            <div className='data'>
            <ul>
                <li>
                <span className="bullet bullet-a">
                    <h6>Resume Review</h6></span>
                    <p>Completed</p>
                </li>
                <li>
                   <span className="bullet bullet-b">
                    <h6>Technical Task</h6></span>
                    <p>Completed -<span>Eligible for Next Round</span></p>
                </li>
                <li>
                    <span className="bullet bullet-c">
                        <h6>Technical Interview</h6></span>
                     <p>Completed - <span>Eligible for Next Round</span></p>
                </li>
                <li>
                    <span className="bullet bullet-d">
                        <h6>HR Interview</h6></span>
                     <p>Waiting for Confirmation</p>
                </li>
                </ul>
            </div>
            <div className='dates'>
              <ul>
                <li><p>13 Mar,2023</p></li>
                <li><p>15 Mar,2023</p></li>
                <li><p>18 Mar,2023</p></li>
                <li><p>21 Mar,2023</p></li>
              </ul>
            </div>    
           
            </div>
            </div>
     
    );
}


export default InterviewSchedule;