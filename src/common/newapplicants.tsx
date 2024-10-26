import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Icons for phone and message
import '../css/common/newapplicants.css';

interface Applicant {
  id: number;
  name: string;
  designation: string;
  imgUrl?: string;
}

interface NewApplicantsProps {
  applicants: Applicant[];
}

const NewApplicants: React.FC<NewApplicantsProps> = ({ applicants }) => {
  return (
    <div className="new-applicants-section">
      <div className="y">
        <h6 className="title">New Applicants</h6>
        <button className="view-all-btn" type="button">View All</button>
      </div>
      <div className='new-applicants'>
      <div className="applicants-list">
        {applicants.map((applicant) => (
          <div key={applicant.id} className="applicant-card">
            <img
              src={applicant.imgUrl}
              alt={applicant.name}
              className="applicant-image"
            />
          
            <div className="applicant-details">
              <h5 className="applicant-name">{applicant.name}</h5>
              <h6 className="applicant-designation">{applicant.designation}</h6>
            </div>
            <div className="applicant-actions">
              <FaEnvelope className="message-icon" title="Send Message" />
              <FaPhone className="phone-icon" title="Call" />
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default NewApplicants;
