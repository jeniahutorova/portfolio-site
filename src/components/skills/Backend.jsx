import React from "react";
import "./skills.css";

function Backend() {
  return (
    <div className="skills__item">
      <p className="skills__title">Backend</p>
      <div className="grid">
        <div className="grid__item">
          <i className="uil uil-check-circle"></i>
          <p>Node.js</p>
        </div>
        <div className="grid__item">
          <i className="uil uil-check-circle"></i>
          <p>PostgreSQL</p>
        </div>
        <div className="grid__item">
          <i className="uil uil-check-circle"></i>
          <p>SQL</p>
        </div>
        <div className="grid__item">
          <i className="uil uil-check-circle"></i>
          <p>Express</p>
        </div>
        <div className="grid__item">
          <i className="uil uil-check-circle"></i>
          <p>Seeding</p>
        </div>
        <div className="grid__item">
          <i className="uil uil-check-circle"></i>
          <p>Hosting</p>
        </div>
      </div>
    </div>
  );
}

export default Backend;
