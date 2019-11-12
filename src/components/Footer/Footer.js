import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-media">
        <div className="github">
          <a href="https://github.com/zyzmoz" target="_blank">GitHub</a>
        </div>
        <div className="dev">
          <a href="https://dev.to/zyzmoz" target="_blank">Dev.to</a>
        </div>
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/daniel-cunha-87975623" target="_blank">Linkedin</a>
        </div>
        <div className="resume">
          <a href="https://docs.google.com/document/d/1c-KhdSSasJ_8P_af-gwpGnNVY_G-L8M8W8DftCjLAf8/edit?usp=sharing" target="_blank">My Resumé</a>
        </div>
      </div>
      Built with  <span className="heart">&hearts;</span> by Daniel Cunha
    </div>
  );
};

export default Footer;