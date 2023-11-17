
import React, { useState, useEffect } from 'react';
import './App.css'; // Import  styles
import axios from 'axios';

// Profile component
const Profile = () => {
  // State to manage profile data
  const [profile, setProfile] = useState({});

  // Effect to fetch profile data when the component mounts
  useEffect(() => {
    axios.get('/api/profile') //  backend endpoint for fetching profile data
      .then(response => {
        setProfile(response.data);
      })
      .catch(error => {
        console.error('Error fetching profile:', error);
      });
  }, []);

  return (
    <div className="profile-container">
      <header>
        <h1>{profile.name}</h1>
        <p>{profile.headline}</p>
        <p>{profile.location}</p>
      </header>
      <section className="profile-details">
        <div className="profile-summary">
          <h2>Summary</h2>
          <p>{profile.summary}</p>
        </div>
        <div className="profile-experience">
          <h2>Experience</h2>
          {profile.experience && profile.experience.map((experience, index) => (
            <div key={index} className="experience-item">
              <h3>{experience.title}</h3>
              <p>{experience.company}</p>
              <p>{experience.location}</p>
              <p>{experience.startDate} - {experience.endDate}</p>
              <p>{experience.description}</p>
            </div>
          ))}
        </div>
        {/* Add sections for education, skills, and other profile details */}
      </section>
    </div>
  );
};

export default Profile;
