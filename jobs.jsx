// Import necessary React components and styles
import React, { useState } from 'react';
import './App.css'; // Import your styles

// Job component to display individual job details
const Job = ({ job }) => (
  <div className="job">
    <h3>{job.title}</h3>
    <p>{job.company}</p>
    <p>{job.location}</p>
    <p>{job.description}</p>
  </div>
);

// Main App component
const App = () => {
  // Dummy data for jobs
  const dummyJobs = [
    { title: 'Software Engineer', company: 'ABC Inc.', location: 'City A', description: 'Job description...' },
    // Add more job objects as needed
  ];

  // State to manage jobs
  const [jobs, setJobs] = useState(dummyJobs);

  return (
    <div className="app">
      <header>
        <h1>Job Sections</h1>
      </header>
      <section className="jobs-section">
        {jobs.map((job, index) => (
          <Job key={index} job={job} />
        ))}
      </section>
    </div>
  );
};

export default App;
