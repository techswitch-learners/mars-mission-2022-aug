import React, { useState } from "react";
import Spirit from "images/SpiritRover.jpg"

function showPopUp(){
  Document.getElementById("spirit-pop-up").style.display = "flex"
}

export const RoverSelectorPage: React.FunctionComponent = () => {
  const [showInfo, setShowInfo] = useState("");

  return (
    <div>
        CuriosityMap
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
