import React from 'react';
import './Projects.css'; // Make sure to create or update this CSS file for styling

const Projects = () => {
  return (
    <div className="projects-page">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-list">
        <div className="project-box">
          <a href="/path/to/MyFavMov.html" target="_blank" rel="noopener noreferrer">
            <img src="https://ceblog.s3.amazonaws.com/wp-content/uploads/2021/03/10114044/image2-8-1536x936.png" alt="Session 1" className="project-image" />
          </a>
          <p>Bluehost is a domain registration and web hosting company owned by Newfold Digital. It was one of the 20 largest web hosts in 2015 and was collectively hosting over 2 million domains in 2010. </p>
        </div>
        <div className="project-box">
          <a href="/path/to/Album.html" target="_blank" rel="noopener noreferrer">
            <img src="https://thegoodalliance.org/wp-content/uploads/2022/07/Canva-Photos.jpg" alt="Session 2" className="project-image" />
          </a>
          <p>Canva is a fantastic resource for designing visual assets for websites, social media, blogs, marketing collateral and more. What some might not know, however, is that you can also use it to source website images.</p>
        </div>
        <div className="project-box">
          <a href="/path/to/loan-application.html" target="_blank" rel="noopener noreferrer">
            <img src="https://thegoodalliance.org/wp-content/uploads/2022/07/Death-to-Stock.jpg" alt="Session 3" className="project-image" />
          </a>
          <p>Death to Stock is an Artist Owned Co-op that provides you with the freshest authentic stock photos and videos; with unlimited downloads and new work added every month. Videos. Reels.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
