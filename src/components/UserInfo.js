import React from 'react';

const UserInfo = () => {
  const user = {
    name: "Yash Bhagat",
    email: "yashbhagat107@gmail.com",
    role: "Software Developer",
    id: "10072002",
    image: "https://i.pinimg.com/736x/7b/01/b7/7b01b7dfcbaa4d80235f0e1d424a0b4f.jpg"
  };

  return (
    <div className="page-content">
      <h1>User Profile</h1>
      
      <div className="profile-card">
        
        <div className="profile-header">
          <img src={user.image} alt="Profile" className="profile-img" />
          <h2>{user.name}</h2>
          <p className="profile-role">{user.role}</p>
        </div>

        <div className="profile-details">
          
          <div className="detail-row">
            <strong>Email Address:</strong>
            <span>{user.email}</span>
          </div>
          
          <div className="detail-row">
            <strong>Role:</strong>
            <span>{user.role}</span>
          </div>

          <div className="detail-row" style={{borderBottom: 'none'}}>
             <strong>Student ID:</strong>
             <span>{user.id}</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserInfo;