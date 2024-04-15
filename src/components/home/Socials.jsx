import React from "react";
import "./home.css";
const Socials = () => {
  return (
    <div className="socials__container">
      <a
        href="https://github.com/jeniahutorova"
        target="_blank"
        rel="noreferrer"
        className="social__link"
      >
        <i className="uil uil-github"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/yevheniia-hutorova-b8a419249/"
        rel="noreferrer"
        target="_blank"
        className="social__link"
      >
        <i className="uil uil-linkedin"></i>
      </a>
    </div>
  );
};

export default Socials;
