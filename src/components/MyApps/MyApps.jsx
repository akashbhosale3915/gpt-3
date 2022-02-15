import React from "react";
import "./myapps.css";
import myapps from "../../assets/possibility.png";

const MyApps = () => {
  return (
    <React.Fragment>
      <div className="myapps" id="case">
        <div className="myapps__imgdiv">
          <img src={myapps} alt="My Apps" />
        </div>
        <div className="myapps__content__wrapper">
          <p className="myapps__request">Request Early Access to Get Started</p>
          <h1 className="myapps__possibilities">
            The possibilities are beyond your imagination
          </h1>
          <p className="myapps__content">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <p className="myapps__request__early">
            Request Early Access to Get Started
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MyApps;
