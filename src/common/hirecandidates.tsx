import '../css/common/hirecandidates.css';
import React, { useState, useEffect } from 'react';

interface Candidate {
  id: number;
  role: string;
  count: number;
  iconUrl?: string;
}

const HireCandidates: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  const fetchCandidates = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/candidates');
      const data = await response.json();
      setCandidates(data);
    } catch (error) {
      console.error('Error fetching candidates data:', error);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  return (
    <div className="IJ">
      <div className="t">
        <h6 className="title">You Need to Hire</h6>
        <button className="Fbtn-primary" type="button">View All</button>
      </div>
      <div className='hire-candidates'>
        <div className="candidates-list">
          {candidates.map((candidate) => (
            <div key={candidate.id} className="candidate-card">
              <img
                src={candidate.iconUrl}
                alt={candidate.role}
                className="candidate-icon"
              />
              <div className="candidate-details">
                <h5 className="candidate-role">{candidate.role}</h5>
                <h6 className="candidate-count">{candidate.count} Candidates</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HireCandidates;
