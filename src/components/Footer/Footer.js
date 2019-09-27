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
      </div>
      Built with  🤍 by Daniel Cunha
    </div>
  );
};

export default Footer;