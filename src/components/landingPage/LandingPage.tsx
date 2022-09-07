import React from "react";
import "./LandingPage.scss";
import { Link } from "react-router-dom";

export const LandingPage: React.FunctionComponent = () => {
  return (
    <main>
      <img src="/images/image-of-rovers-on-mars.jpg" alt="images of rovers on Mars" className="headline-image"/>
      <h2>Welcome, trainee astronaut, to your Mission to Mars!</h2>
      <p>Here you will learn about the Red Planet and explore its surface.</p>
      <p>When the training is complete, we will test if you are ready to be an astronaut!</p>

      <div className="landing-page-button-menu">
        <Link to="/rovers"><button className="landing-page-button">Explore Mars</button></Link>
        <Link to="/fun-facts"><button className="landing-page-button">Learn More</button></Link>
        <Link to="/quiz"><button className="landing-page-button">Test Your Knowledge</button></Link>
      </div>


    </main>
  );
};
