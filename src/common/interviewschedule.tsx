import React from 'react';
import '../css/common/interviewschedule.css';

const InterviewSchedule: React.FC = () => {
    return (
        <div className="interview-schedule card">
            <h4>Interview Schedule</h4>
            <div className='data-and-dates'>
            <div className='data'>
            <ul>
                <li>
                <span className="bullet bullet-a"></span><strong>Resume Review</strong> 
                    <p>Completed</p>
                </li>
                <li>
                    <strong><span className="bullet bullet-b"></span>Technical Task</strong>
                    <p>Completed -<span>Eligible for Next Round</span></p>
                </li>
                <li>
                    <strong><span className="bullet bullet-c"></span>Technical Interview</strong>
                     <p>Completed - <span>Eligible for Next Round</span></p>
                </li>
                <li>
                    <strong><span className="bullet bullet-d"></span>HR Interview</strong>
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
