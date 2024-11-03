import React, { useEffect, useState } from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import '../css/common/newapplicants.css';

interface Applicant {
  id: number;
  name: string;
  designation: string;
  imgUrl: string;
}

const NewApplicants: React.FC = () => {
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await fetch('http://localhost:3001/applicants');
        if (!response.ok) {
          throw new Error('Failed to fetch applicants data');
        }
        const data = await response.json();
        setApplicants(data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchApplicants();
  }, []);

  if (loading) return <p>Loading applicants...</p>;
  if (error) return <p>Error: {error}</p>;

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
