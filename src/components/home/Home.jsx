import React from "react";
import Socials from "./Socials";
import "./home.css"
import Data from "./Data";
const Home = () => {
    return (
      <section>
        <div className="home__container">
          <Socials />
          <div className="home__img"></div>
          <Data />
        </div>
      </section>
    );
  };

export default Home;
