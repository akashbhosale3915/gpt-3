import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
const Header = () => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="header__left__section">
          <h1 className="header__title">
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p className="header__content">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <div className="input__get__started">
            <input
              type="text"
              placeholder="Your Email Address"
              className="email"
            />
            <button className="getstarted">Get Started</button>
          </div>
          <div className="people__wrapper">
            <img src={people} alt="people" />
            <p className="people__num">
              1,600 people requested access a visit in last 24 hours
            </p>
          </div>
        </div>
        <div className="header__right__section">
          <img src={ai} alt="AI" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
