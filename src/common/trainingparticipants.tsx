import React from 'react';
import '../css/common/trainingparticipants.css';

// Define the interface for the participants' details
interface Participant {
  id: number;
  name: string;
  imgUrl?: string;
  job:string;
}

interface TrainingParticipantsProps {
  participants: Participant[];
}

const TrainingParticipants: React.FC<TrainingParticipantsProps> = ({ participants }) => {
  return (
    <div className='GH'>
      <div className='z'>
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
            <div className='EF'>
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
