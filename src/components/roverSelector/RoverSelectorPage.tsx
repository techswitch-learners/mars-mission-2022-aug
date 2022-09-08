import React, {useState} from "react";
import "./RoverSelectorPage.scss";
import opportunityImage from "/images/OpportunityRover.jpg";
import spiritImage from "/images/SpiritRover.jpg";
import curiosityImage from "/images/CuriosityRover.jpg";

export const RoverSelectorPage: React.FunctionComponent = () => {
  const [showInfo, setShowInfo] = useState("");

  return (
    <div className="rover-selector">
          <div className="rover" onClick={() => setShowInfo("spirit")}>
          <img src={spiritImage} alt="Spirit Rover" />
          <h3>Spirit</h3>
          </div>
        <div className= {`spirit-pop-up ${showInfo === "spirit" ? "expanded" : "collapsed"}`}>
          <img src={spiritImage} alt="Spirit Rover"/>
          <h3>Spirit Rover</h3>
          <p>Some interesting facts about Spirit Rover</p>
          <button>See Spirit's Route</button>
          <button onClick={() => setShowInfo("")}>Back</button>
        </div>
        <div className="rover" onClick={() => setShowInfo("opportunity")}>
          <img src={opportunityImage} alt="Opportunity Rover" />
          <h3>Opportunity</h3>
          </div>
        <div className= {`opportunity-pop-up ${showInfo === "opportunity" ? "expanded" : "collapsed"}`}>
          <img src={opportunityImage} alt="Opportunity Rover"/>
          <h3>Opportunity Rover</h3>
          <p>Some interesting facts about Opportunity Rover</p>
          <button>See Opportunity's Route</button>
          <button onClick={() => setShowInfo("")}>Back</button>
        </div>
          <div onClick={() => setShowInfo("curiosity")} className="rover">
            <img src={curiosityImage} alt="Curiosity Rover" />
           <h3>Curiosity</h3>
          </div>
        <div className= {`curiosity-pop-up ${showInfo === "curiosity" ? "expanded" : "collapsed"}`}>
          <img src={curiosityImage} alt="Curiosity Rover"/>
          <h3>Curiosity Rover</h3>
          <p>Some interesting facts about Curiosity Rover</p>
          <button>See Curiosity's Route</button>
          <button onClick={() => setShowInfo("")}>Back</button>
        </div>
    </div>
  );
};

