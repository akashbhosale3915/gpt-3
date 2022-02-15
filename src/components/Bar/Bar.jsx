import React from "react";
import "./bar.css";

const Bar = () => {
  return (
    <React.Fragment>
      <div className="bar">
        <div className="bar__left">
          <p className="bar__left__p">Request Early Access to Get Started</p>
          <h1 className="bar__left__h1">
            Register today & start exploring the endless possiblities.
          </h1>
        </div>
        <div className="bar__right">
          <button className="bar__right__btn">Get Started</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Bar;
