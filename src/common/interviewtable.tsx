import React, { useState, useEffect } from 'react';
import '../css/common/interviewtable.css'; // Assuming you have custom styles

interface Interview {
  id: number;
  full_name: string;
  designation: string;
  stage: string;
  status: string;
}

const InterviewTable: React.FC = () => {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch interviews data from the backend
  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const response = await fetch('http://localhost:3001/interviews'); // Assuming the correct endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch interview data');
        }
        const data = await response.json();
        setInterviews(data); // Store the interviews in the state
        setLoading(false); // Set loading to false once data is fetched
      } catch (error: any) {
        setError(error.message); // Handle any errors that occur during fetch
        setLoading(false);
      }
    };

    fetchInterviews();
  }, []);

  // Handling loading state and errors
  if (loading) return <p>Loading interview data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="col-lg-10 GH1" style={{minHeight:"75vh"}} >
      <div className="col-lg-11 interview-table" style={{minHeight:"65vh"}}>
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
            {interviews.map((interview) => (
              <tr key={interview.id}>
                <td>{interview.full_name}</td>
                <td>{interview.designation}</td>
                <td>
                  <span className={`bullet bullet-${interview.stage.toLowerCase().replace(/ /g, '-')}`}></span>
                  {interview.stage}
                </td>
                <td>
                  <span className={`custom-badge-${interview.status.toLowerCase() === 'ongoing' ? 'one' : 'two'}`}>
                    {interview.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InterviewTable;
