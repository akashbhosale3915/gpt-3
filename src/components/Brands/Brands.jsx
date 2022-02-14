import React from "react";
import "./brands.css";
import google from "../../assets/google.png";
import slack from "../../assets/slack.png";
import atlassian from "../../assets/atlassian.png";
import dropbox from "../../assets/dropbox.png";
import shopify from "../../assets/shopify.png";

const Brands = () => {
  return (
    <React.Fragment>
      <div className="brands">
        <img src={google} alt="brand" />
        <img src={slack} alt="brand" />
        <img src={atlassian} alt="brand" />
        <img src={dropbox} alt="brand" />
        <img src={shopify} alt="brand" />
      </div>
    </React.Fragment>
  );
};

export default Brands;
