import '../css/common/hirecandidates.css';
import React, { useState, useEffect } from 'react';

interface Candidate {
  id: number;
  role: string;
  count: number;
  iconurl?: string;
}

const HireCandidates: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await fetch('http://localhost:3001/candidates');
        if (!response.ok) {
          throw new Error('Failed to fetch applicants data');
        }
        const data = await response.json();
        setCandidates(data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  if (loading) return <p>Loading candidates...</p>;
  if (error) return <p>Error: {error}</p>;

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
                src={candidate.iconurl}
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
