import React from "react";
import "./projects.css"

function Projects() {
  return (
    <section id="projects">
      <h2 className="section__title">Projects</h2>
      <p className="section__subtitle">Most recent works</p>
      <div className="project-container">
        <div className="project_item">
        <div className="image_backend"></div>        
        <h3>Nc-News-Backend</h3>
        <button className="project_git"><a className="git_link" target="_blank" rel="noreferrer" href="https://github.com/jeniahutorova/nc-news">GitHub</a></button>
        </div>
        <div className="project_item">
        <div className="image_fronend"></div>         
        <h3>Nc-News-Frontend</h3>
        <button className="project_git"><a className="git_link" target="_blank" rel="noreferrer" href="https://github.com/jeniahutorova/nc-news-frontend">GitHub</a></button>
        </div>
        <div className="project_item">
        <div className="image"></div>
          <h3>PlanPerfect</h3>
          <button className="project_git"><a className="git_link" target="_blank" rel="noreferrer" href="https://github.com/FredR0101/Plan-Perfect-2">GitHub</a></button>
        </div>
      </div>
      </section>
  );
}

export default Projects;
