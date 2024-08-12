import React from 'react';
import Navbar from './Navbar';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="content-box">
        <h1>WELCOME TO MY PORTFOLIO WEBSITE</h1>
        <div className="intro-box">
          <p>Hi there, My name is Janno E, Into and this is my portfolio website.</p>
          <img src="https://scontent.fcgy2-2.fna.fbcdn.net/v/t1.6435-9/117758878_797981131007584_855623729930440349_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeFzZJp9ocjShudzdJ-GRgbyNRcqvN0C5801Fyq83QLnzSoLYrLM-gPNSYprq-hYoD0sOblsdKhu-plCMwkwro_y&_nc_ohc=DVnuFGj0EQcQ7kNvgHoWpW1&_nc_ht=scontent.fcgy2-2.fna&oh=00_AYBHIFLMgNaQRYvdyzczMHCRQ6TkyC_pWmryO37JbPQs4w&oe=66DF7EC0" alt="User" className="user-pic" />
        </div>
      </div>
    </div>
  );
}

export default Home;
