import React, { useState } from "react";
import Spirit from "/images/SpiritRover.jpg"
import './RoverSelectorPage.scss'

export const RoverSelectorPage: React.FunctionComponent = () => {
  const [showInfo, setShowInfo] = useState("");

  return (
    <div>
        <button onClick={() => setShowInfo("spirit")}>Spirit</button>
        <div className= {`spirit-pop-up ${showInfo === "spirit" ? "expanded" : "collapsed"}`}>
          <img src={Spirit} alt="Spirit Rover"/>
          <h3>Spirit Rover</h3>
          <p>Some interesting facts about Spirit Rover</p>
          <button>See Spirit's Route</button>
          <button onClick={() => setShowInfo("")}>Back</button>
        </div>
        <button onClick={() => setShowInfo("opportunity")}>Opportunity</button>
        <div className= {`opportunity-pop-up ${showInfo === "opportunity" ? "expanded" : "collapsed"}`}>
          <img src={Spirit} alt="Opportunity Rover"/>
          <h3>Opportunity Rover</h3>
          <p>Some interesting facts about Opportunity Rover</p>
          <button>See Opportunity's Route</button>
          <button onClick={() => setShowInfo("")}>Back</button>
        </div>
        <button onClick={() => setShowInfo("curiosity")}>Curiosity</button>
        <div className= {`curiosity-pop-up ${showInfo === "curiosity" ? "expanded" : "collapsed"}`}>
          <img src={Spirit} alt="Curiosity Rover"/>
          <h3>Curiosity Rover</h3>
          <p>Some interesting facts about Curiosity Rover</p>
          <button>See Curiosity's Route</button>
          <button onClick={() => setShowInfo("")}>Back</button>
        </div>
    </div>
  );
};
