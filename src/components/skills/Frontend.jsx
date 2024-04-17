import React from "react";
import "./skills.css";
function Frontend() {
  return (
    <div className="skills__item">
      <p className="skills__title">Frontend</p>

      <div className="grid">
        <div className="grid__item">
          <i className="uil uil-check-circle"></i>
          <p>HTML</p>
        </div>
        <div className="grid__item">
          <i className="uil uil-check-circle"></i>
          <p>CSS</p>
        </div>
        <div className="grid__item">
          <i className="uil uil-check-circle"></i>
          <p>JavaScript</p>
        </div>
        <div className="grid__item">
          <i className="uil uil-check-circle"></i>
          <p>TDD</p>
        </div>
        <div className="grid__item">
          <i className="uil uil-check-circle"></i>
          <p>OOP</p>
        </div>
        <div className="grid__item">
          <i className="uil uil-check-circle"></i>
          <p>React</p>
        </div>
        <div className="grid__item">
          <i className="uil uil-check-circle"></i>
          <p>Git</p>
        </div>
      </div>
    </div>
  );
}

export default Frontend;
