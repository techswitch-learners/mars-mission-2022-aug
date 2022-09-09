import React from "react";
import "./LandingPage.scss";
import { Link } from "react-router-dom";

export const LandingPage: React.FunctionComponent = () => {
  return (
    <main>
      <img src="/images/image-of-rovers-on-mars.jpg" alt="Rovers on Mars" className="headline-image" />
      <h2>Welcome, trainee astronaut, to your Mission to Mars!</h2>
      <p>Here you will learn about the Red Planet and explore its surface. When the training is complete, we will test if you are ready to be an astronaut!</p>

      <div className="landing-page__button-menu">
        <Link to="/rovers">Explore Mars</Link>
        <Link to="/fun-facts">Learn More</Link>
        <Link to="/quiz">Test Your Knowledge</Link>
        <Link to="/photo-gallery">Photo Gallery</Link>
      </div>
    </main>
  );
};
