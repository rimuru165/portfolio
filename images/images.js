import React from 'react';
import './Home.css';
import profilePic from '"C:\Users/63951\Downloads/39921081_10212417928744267_5356447246067957760_n (1).jpg"'; // Adjust path as needed

function Home() {
  return (
    <div className="home-container">
      <div className="intro-box">
        <div className="text-box">
          <h1>Welcome</h1>
          <p>This is the introduction to the website. Here you can find more about me, my projects, and how to get in touch.</p>
        </div>
        <div className="image-box">
          <img src={profilePic} alt="User" />
        </div>
      </div>
    </div>
  );
}

export default Home;
