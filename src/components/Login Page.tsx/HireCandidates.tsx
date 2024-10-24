import React from 'react';
import '../../css/Login Page.css/HireCandidates.css';

interface Candidate {
  id: number;
  role: string;
  count: number;
  iconUrl?: string;
}

interface HireCandidatesProps {
  candidates: Candidate[];
}

const HireCandidates: React.FC<HireCandidatesProps> = ({ candidates }) => {
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
