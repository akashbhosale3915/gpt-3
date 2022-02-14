import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <React.Fragment>
      <nav>
        <h1>GPT-3</h1>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">What is GPT?</a>
          </li>
          <li>
            <a href="#">Open AI</a>
          </li>
          <li>
            <a href="#">Case Studies</a>
          </li>
          <li>
            <a href="#">Library</a>
          </li>
        </ul>
        <div className="sign__in__up">
          <a href="#">Sign in</a>
          <button>Sign up</button>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
