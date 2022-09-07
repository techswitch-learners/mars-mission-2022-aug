import React from "react";
import "./LandingPage.scss";
import { Link } from "react-router-dom";

export const LandingPage: React.FunctionComponent = () => {
  return (
    <main>
      <img src="/images/image-of-rovers-on-mars.jpg" alt="images of rovers on Mars" className="headline-image"/>
      <p>Welcome to our informative and entertaining website about MARS!</p>

      <div className="landing-page-buttons">
        <Link to="/rovers"><button>Explore Mars</button></Link>
        <Link to="/fun-facts"><button>Learn More</button></Link>
        <Link to="/quiz"><button>Test Your Knowledge</button></Link>
      </div>


    </main>
  );
};
