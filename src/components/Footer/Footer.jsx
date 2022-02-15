import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <h1 className="footer__gradient">
          Do you want to step in to the future before others
        </h1>
        <button className="footer__request">Request Early Access</button>
        <div className="footer__row">
          <div className="footer__column">
            <h1>GPT-3</h1>
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div className="footer__column">
            <h1>Links</h1>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="footer__column">
            <h1>Company</h1>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="footer__column">
            <h1>Get in touch</h1>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
          </div>
        </div>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
