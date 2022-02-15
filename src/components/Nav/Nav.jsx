import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <React.Fragment>
      <nav id="nav">
        <h1>GPT-3</h1>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#whatgpt3">What is GPT?</a>
          </li>
          <li>
            <a href="#openai">Open AI</a>
          </li>
          <li>
            <a href="#case">Case Studies</a>
          </li>
          <li>
            <a href="#library">Library</a>
          </li>
        </ul>
        <div className="sign__in__up">
          <a href="!#">Sign in</a>
          <button>Sign up</button>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
