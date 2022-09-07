import React, { useState } from "react";
import Spirit from "/images/SpiritRover.jpg"
import './RoverSelectorPage.scss'

export const RoverSelectorPage: React.FunctionComponent = () => {
  const [showInfo, setShowInfo] = useState("");

  // function toggleSpiritPopUp() {
  //   setShowInfo("spirit")
  // }

  // function toggleOpportunityPopUp() {
  //   setShowInfo("opportunity")
  // }

  // function toggleCuriosityPopUp() {
  //   setShowInfo("curiosity")
  // }

  // function togglePopUpOff() {
  //   setShowInfo("")
  // }

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
    </div>
  );
  
  // if (showInfo === "") {
  //   return (
  //     <>
  //       <button onClick={() => setShowInfo("spirit")}>Spirit</button>
  //     </>
  //   )
  // };
  // if (showInfo === "spirit") {
  //   return (
  //     <>
  //       <div id="spirit-pop-up">
  //         <img src={Spirit} alt="Spirit Rover"/>
  //         <h3>Spirit Rover</h3>
  //         <p>Some interesting facts about Spirit Rover</p>
  //         <button>See Spirit's Route</button>
  //         <button>Back</button>
  //       </div>
  //     </>
  //   )
  // };
};
