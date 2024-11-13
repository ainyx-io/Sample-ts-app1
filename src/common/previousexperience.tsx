import React, { useState, useEffect } from 'react';
import '../css/common/previousexperience.css'; // Assuming you have custom styles
import Table from 'react-bootstrap/Table';

// Define the structure for Previous Experience data
interface PreviousExperience {
  id: number;
  company_name: string;
  designation: string;
  experience: string;
  location: string;
}

const PreviousExperience: React.FC = () => {
  const [experiences, setExperiences] = useState<PreviousExperience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch experience data from the backend
  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch('http://localhost:3001/previous_experience'); // Adjust the API URL
        if (!response.ok) {
          throw new Error('Failed to fetch experience data');
        }
        const data = await response.json();
        setExperiences(data); // Store the fetched experience data in the state
        setLoading(false); // Set loading to false once data is fetched
      } catch (error: any) {
        setError(error.message); // Handle any errors that occur during fetch
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Handling loading state and errors
  if (loading) return <p>Loading experience data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="col-lg-12 GH2" style={{ minHeight: '20vh' }}>
      <div className="z">
        <h6 className="title">Previous Experience</h6>
        <button className="Cbtn-primary" type="button">
          View All
        </button>
      </div>
      <div className="col-lg-10 experience-table">
        <Table className="table table1">
          <thead>
            <tr>
              <th scope="col">Company Name</th>
              <th scope="col">Designation</th>
              <th scope="col">Experience</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
          <tbody>
            {experiences.map((experience) => (
              <tr key={experience.id}>
                <td>{experience.company_name}</td>
                <td>{experience.designation}</td>
                <td>{experience.experience}</td>
                <td>{experience.location}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default PreviousExperience;
