import React from 'react';
import '../../css/Interview Process Page.css/Interview table.css';
import {Row,Col,Card} from 'react-bootstrap';

const InterviewTable: React.FC = () => {
  return (
    <table className="table table1">
      <thead>
        <tr>
          <th scope="col">Full Name</th>
          <th scope="col">Designation</th>
          <th scope="col">Stage</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>UI/UX Designer</td>
          <td><span className="bullet bullet-tech"></span>Tech Interview</td>
          <td><span className="custom-badge-one">Ongoing</span></td>
        </tr>
        <tr>
          <td>Zara John</td>
          <td>iOS Developer</td>
          <td><span className="bullet bullet-task"></span>Task</td>
          <td><span className="custom-badge-two">Completed</span></td>
        </tr>
        <tr>
          <td>James Samuel</td>
          <td>Content Designer</td>
          <td><span className="bullet bullet-resume"></span>Resume Review</td>
          <td><span className="custom-badge-one">Ongoing</span></td>
        </tr>
        <tr>
          <td>Anna Elizabeth</td>
          <td>Android Developer</td>
          <td><span className="bullet bullet-tech"></span>Tech Interview</td>
          <td><span className="custom-badge-two">Completed</span></td>
        </tr>
        <tr>
          <td>Neenu Abraham</td>
          <td>UI/UX Designer</td>
          <td><span className="bullet bullet-task"></span>Task</td>
          <td><span className="custom-badge-one">Ongoing</span></td>
        </tr>
        <tr>
          <td>Mike Tyson</td>
          <td>UI/UX Designer</td>
          <td><span className="bullet bullet-tech"></span>Tech Interview</td>
          <td><span className="custom-badge-one">Ongoing</span></td>
        </tr>
        <tr>
          <td>Anna John</td>
          <td>IOS Developer</td>
          <td><span className="bullet bullet-task"></span>Task</td>
          <td><span className="custom-badge-two">Completed</span></td>
        </tr>
        <tr>
          <td>Emy Johnson</td>
          <td>IOS Developer</td>
          <td><span className="bullet bullet-task"></span>Task</td>
          <td><span className="custom-badge-two">Completed</span></td>
        </tr>
        <tr>
          <td>James Samuel</td>
          <td>Content Designer</td>
          <td><span className="bullet bullet-resume"></span>Resume Review</td>
          <td><span className="custom-badge-one">Ongoing</span></td>
        </tr>
        <tr>
          <td>Anna Elizabeth</td>
          <td>Android Developer</td>
          <td><span className="bullet bullet-tech"></span>Tech Interview</td>
          <td><span className="custom-badge-two">Completed</span></td>
        </tr>
      </tbody>
    </table>
  );
};

export default InterviewTable;
