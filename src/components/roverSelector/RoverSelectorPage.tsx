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
          <h3 className="info-card-title">Spirit Rover</h3>
          <p>Launch Date:<br/>
            June 10, 2003<br/>
            Landed on Mars:<br/>
            January 4, 2004 (it took 209 days to get to Mars!!!)<br/>
            End of Mission:<br/>
            May 25, 2011 (The Rover was driving around Mars for 7 years!!!)<br/>
            It lasted 25x longer than Nasa thought it would, pretty impressive.<br/>
            Weight:<br/>
            1,062 kilograms (About the weight of a walrus or a small car!)<br/>
            Distance Travelled:<br/>
            4.8 miles…<br/>
            That's 0.000074 miles per hour… not fast, although it took a lot of breaks!
            </p>
          <button>See Spirit's Route</button>
          <button className="route-button" onClick={() => setShowInfo("")}>Back</button>
        </div>
        <div className="rover" onClick={() => setShowInfo("opportunity")}>
          <img src={opportunityImage} alt="Opportunity Rover" />
          <h3>Opportunity</h3>
          </div>
        <div className= {`opportunity-pop-up ${showInfo === "opportunity" ? "expanded" : "collapsed"}`}>
          <img src={opportunityImage} alt="Opportunity Rover"/>
          <h3 className="info-card-title">Opportunity Rover</h3>
          <p>Launch Date:<br/>
            July 8, 2003<br/>
            Landed on Mars:<br/>
            January 25, 2004 (it took 202 days to get to Mars!!!)<br/>
            End of Mission:<br/>
            February 13, 2019 (The Rover was driving around Mars for 15 years!!!)<br/>
            It lasted 60x longer than Nasa thought it would, pretty impressive.<br/>
            Weight:<br/>
            1,062 kilograms (About the weight of a walrus or a small car!)<br/>
            Distance Travelled:<br/>
            28 miles…<br/>
            It was the first thing built by humans to travel that far on another planet!
            </p>
          <button>See Opportunity's Route</button>
          <button className="route-button" onClick={() => setShowInfo("")}>Back</button>
        </div>
          <div onClick={() => setShowInfo("curiosity")} className="rover">
            <img src={curiosityImage} alt="Curiosity Rover" />
           <h3>Curiosity</h3>
          </div>
        <div className= {`curiosity-pop-up ${showInfo === "curiosity" ? "expanded" : "collapsed"}`}>
          <img src={curiosityImage} alt="Curiosity Rover"/>
          <h3 className="info-card-title">Curiosity Rover</h3>
          <p>Launch Date:<br/>
            November 26, 2011<br/>
            Landed on Mars:<br/>
            August 6, 2012 (it took 202 days to get to Mars!!!<br/>
            End of Mission:<br/>
            No end yet. It's been going for 10 years with no sign of stopping!<br/>
            Weight:<br/>
            3,893 kilograms (About the weight of an Asian elephant or a flat-bed truck!)<br/>
            Distance Travelled:<br/>
            17.5 miles…<br/>
            It has a top speed of 0.05 miles per hour, it doesn't sound fast but Mars is really rocky!
          </p>
          <button>See Curiosity's Route</button>
          <button className="route-button" onClick={() => setShowInfo("")}>Back</button>
        </div>
    </div>
  );
};

