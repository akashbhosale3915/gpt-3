import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <h1 className="footer__gradient">
          Do you want to step in to the future before others
        </h1>
        <div className="req__btn">
          <button className="footer__request">Request Early Access</button>
        </div>
        <div className="footer__row">
          <div className="footer__column">
            <h1 className="footer__logo">GPT-3</h1>
            <p className="footer__p address">
              Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
            </p>
          </div>
          <div className="footer__column">
            <h1 className="footer__h">Links</h1>
            <p className="footer__p">Overons</p>
            <p className="footer__p">Social Media</p>
            <p className="footer__p">Counters</p>
            <p className="footer__p">Contact</p>
          </div>
          <div className="footer__column">
            <h1 className="footer__h">Company</h1>
            <p className="footer__p">Terms & Conditions</p>
            <p className="footer__p">Privacy Policy</p>
            <p className="footer__p">Contact</p>
          </div>
          <div className="footer__column">
            <h1 className="footer__h">Get in touch</h1>
            <p className="footer__p">Crechterwoord K12 182 DK Alknjkcb</p>
            <p className="footer__p">085-132567</p>
            <p className="footer__p">info@payme.net</p>
          </div>
        </div>
        <p className="copyright">© 2021 GPT-3. All rights reserved.</p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
