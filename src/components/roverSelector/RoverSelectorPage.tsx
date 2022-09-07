import React from "react";
import "./RoverSelectorPage.scss";
import Opportunity from "/images/OpportunityRover.jpg";
import Spirit from "/images/SpiritRover.jpg";
import Curiosity from "/images/CuriosityRover.jpg";

export const RoverSelectorPage: React.FunctionComponent = () => {
  return (
    <div className="rover-selector">
      <div className="rover curiosity">
        <img src={Curiosity} alt="Opportunity Rover" />
        <h3>Curiosity</h3>
      </div>
      <div className="rover opportunity">
        <img src={Opportunity} alt="Opportunity Rover" />
        <h3>Opportunity</h3>
      </div>
      <div className="rover spirit">
        <img src={Spirit} alt="Opportunity Rover" />
        <h3>Spirit</h3>
      </div>
    </div>
  );
};
