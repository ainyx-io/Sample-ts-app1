import React from 'react';
import '../css/common/recruitmentprogress.css';

// Define the interface for each recruitment row
interface RecruitmentRow {
  id: number;
  name: string;
  designation: string;
  status: string;
}

interface RecruitmentProgressProps {
  progressData: RecruitmentRow[];
}

// Function to get the color based on status
const getStatusColor = (status: string): string => {
  switch (status) {
    case 'Tech Interview':
      return 'green';
    case 'Resume Review':
      return 'blue';
    case 'Task':
      return 'orange';
    case 'Final Interview':
      return 'red';
    default:
      return 'gray';
  }
};

const RecruitmentProgress: React.FC<RecruitmentProgressProps> = ({ progressData }) => {
  return (
    <div className='CD'>
      <div className='x'>
        <h3 className="title">Recruitment Progress</h3>
        <button className="Abtn-primary" type="button">View All</button>
    </div>
    <div className="recruitment-progress">
      
      <table className="progress-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Designation</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {progressData.map((row) => (
            <tr key={row.id}  
              style={{
              backgroundColor: row.name === 'John Samuel' && row.designation === 'PHP Developer' ? '#3F6AD8' : 'transparent',
              color: row.name === 'John Samuel' && row.designation === 'PHP Developer' ? 'white' : 'white' // Adjust text color for better visibility
            }}>
              <td>{row.name}</td>
              <td>{row.designation}</td>
              <td>
                <span
                  className="status-bullet"
                  style={{ backgroundColor: getStatusColor(row.status) }}
                ></span>
                {row.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default RecruitmentProgress;
