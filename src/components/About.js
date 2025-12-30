import React from 'react';

const About = () => {
  return (
    <div className="page-content">
      <h1>About This Project</h1>

      <div className="user-card" style={{ textAlign: 'left', maxWidth: '600px' }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>
          <strong>Project Name:</strong> Student Management Portal<br/>
          <strong>Purpose:</strong> Web Development Assignment<br/>
          <strong>Technology:</strong> React.js, CSS3
        </p>
        <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '15px 0' }} />
        <p>
          Hello! This project is my assignment. 
          Instead of just making a static HTML page, I tried to build a 
          <strong> Single Page Application</strong>. This helps the website load 
          faster without refreshing the page every time you click a link.
        </p>
      </div>

      <div style={{ textAlign: 'left', maxWidth: '600px', margin: '30px auto' }}>
        
        <h3>What I Learned</h3>
        <p style={{ marginTop: '10px' }}>
          While building this, I learned how to manage folder structures in React 
          and how to link different components using <code>react-router-dom</code>.
          I also faced some errors (like path issues) which helped me understand debugging better.
        </p>

        <h3 style={{ marginTop: '30px' }}>Future Improvements</h3>
        <p style={{ marginTop: '10px' }}>
          Currently, the user data is static (hardcoded). In the future, I plan to:
        </p>
        <ul style={{ paddingLeft: '20px', marginTop: '10px', color: '#555' }}>
          <li style={{ marginBottom: '5px' }}>Connect this app to a backend API/Database.</li>
          <li style={{ marginBottom: '5px' }}>Add a Login/Signup feature.</li>
          <li>Implement Dark Mode.</li>
        </ul>

      </div>
    </div>
  );
};

export default About;