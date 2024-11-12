import React, { useState, useEffect } from 'react';
import '../css/common/profiledata.css';

interface Profile {
  id: number;
  full_name: string;
  designation: string;
  current_working: string;
  experience: string;
  education: string;
}

const ProfileData: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch('http://localhost:3001/profiles'); // Assuming the correct endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }
        const data = await response.json();
        setProfiles(data); // Store the profiles in the state
        setLoading(false); // Set loading to false once data is fetched
      } catch (error: any) {
        setError(error.message); // Handle any errors that occur during fetch
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []); // Empty dependency array to only run once when the component mounts

  // Handling loading state and errors
  if (loading) return <p>Loading profile data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="candidate-profile-card">
      {profiles.map((profile) => (
        <div key={profile.id} className="profile-card">
          <img src="/images/mike.png" alt={profile.full_name} className="circle-image" />
          <h3>{profile.full_name}</h3>
          <p>{profile.designation}</p>
          <div className='things-sidebyside'>
            <div className='one-thing'>
              <p>Current Working</p>
              <p>Experience</p>
              <p>Education</p>
            </div>
            <div className='second-thing'>
              <p>{profile.current_working}</p>
              <p>{profile.experience}</p>
              <p>{profile.education}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileData;
