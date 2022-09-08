import React from "react";
import "./RoverSelectorPage.scss";
import opportunityImage from "/images/OpportunityRover.jpg";
import spiritImage from "/images/SpiritRover.jpg";
import curiosityImage from "/images/CuriosityRover.jpg";

export const RoverSelectorPage: React.FunctionComponent = () => {
  return (
    <div className="rover-selector">
      <div className="rover">
        <img src={curiosityImage} alt="Curiosity Rover" />
        <h3>Curiosity</h3>
      </div>
      <div className="rover">
        <img src={opportunityImage} alt="Opportunity Rover" />
        <h3>Opportunity</h3>
      </div>
      <div className="rover">
        <img src={spiritImage} alt="Spirit Rover" />
        <h3>Spirit</h3>
      </div>
    </div>
  );
};
