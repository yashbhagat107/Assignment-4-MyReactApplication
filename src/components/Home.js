import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page-content">
      <h1>Welcome to My React Project</h1>
      <p>
        Hi, this is my assignment. I built this Single Page Application 
        to practice <strong>React Components</strong> and <strong>Routing</strong>.
        I tried to keep the UI clean and simple using my own CSS.
      </p>

      <div className="user-card" style={{ textAlign: 'left', marginTop: '30px' }}>
        <h3>What I used in this project:</h3>
        <ul style={{ paddingLeft: '20px', marginTop: '10px', color: '#555' }}>
          <li style={{ marginBottom: '8px' }}>
            <strong>React Router DOM:</strong> For navigation between pages without reloading.
          </li>
          <li style={{ marginBottom: '8px' }}>
            <strong>Functional Components:</strong> Used modern React hooks structure.
          </li>
          <li style={{ marginBottom: '8px' }}>
            <strong>CSS Modules:</strong> Styled the application to look professional yet simple.
          </li>
          <li>
            <strong>Reusability:</strong> Created separate files for Header and Footer components.
          </li>
        </ul>
      </div>

      <div style={{ marginTop: '30px' }}>
        <Link to="/about" className="btn" style={{ marginRight: '15px' }}>Check About Me</Link>
        <Link to="/userinfo" className="btn" style={{ backgroundColor: '#2c3e50' }}>See User Data</Link>
      </div>
    </div>
  );
};

export default Home;