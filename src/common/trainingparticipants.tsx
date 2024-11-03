import React, { useState, useEffect } from 'react';
import '../css/common/trainingparticipants.css';

interface Participant {
  id: number;
  name: string;
  imgUrl?: string;
  job: string;
}

const TrainingParticipants: React.FC = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await fetch('http://localhost:3001/participants');
        if (!response.ok) {
          throw new Error('Failed to fetch applicants data');
        }
        const data = await response.json();
        setParticipants(data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };
    
    fetchParticipants();
  }, []);

  if (loading) return <p>Loading participants...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="GH">
      <div className="z">
        <h6 className="title">Ready for Training</h6>
        <button className="Cbtn-primary" type="button">View All</button>
      </div>
      <div className="training-participants">
        <div className="participants-list">
          {participants.map((participant) => (
            <div key={participant.id} className="participant-card">
              <img
                src={participant.imgUrl}
                alt={participant.name}
                className="participant-img"
              />
              <div className="EF">
                <h6 className="participant-name">{participant.name}</h6>
                <h6 className="participant-job">{participant.job}</h6>
                <button className="start-training-btn"><h6>Start Training</h6></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingParticipants;
