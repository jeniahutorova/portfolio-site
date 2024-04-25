import React from "react";
import Socials from "./Socials";
import "./home.css"
import Data from "./Data";
import Skills from "../skills/Skills";
import CV from "../../assets/Yevheniia Hutorova.pdf"

const Home = () => {
    return (
      <section id="main" >
        <div className="home__container">
          <Socials />
          <div className="home__img"></div>
          <Data />
        </div>
        <a download href={CV} className="button--flex" >
        <i className="uil uil-folder-upload button__icon"></i>
          Download CV</a>
        <Skills />
      </section>
    );
  };

export default Home;
