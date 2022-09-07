import React from "react";
import "./App.scss";
import { Header } from "./navigation/Header";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./landingPage/LandingPage";
import { FunFactPage } from "./funFacts/FunFactPage";
import { RoverSelectorPage } from "./roverSelector/RoverSelectorPage";
import { QuizPage } from "./quiz/QuizPage";
import { RouteMap } from "./map/RouteMap";

const App: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/fun-facts" element={<FunFactPage />} />
        <Route path="/rovers" element={<RoverSelectorPage />}/>
        <Route path="/rovers/curiosity" element={<RouteMap
          roverName="Curiosity"
          mapImageUrl="https://mars.nasa.gov/system/resources/deepzooms/24816_MSL_TraverseMap_Sol2695.jpg"
          pois={[
            { x: 0, y: 0, sol: 1},
            { x: 0.5, y: 0.5, sol: 5},
            { x: 0.7, y: 0.7, sol: 7},
            { x: 1, y: 1, sol: 10},
          ]}
        />}/>
      
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </>
  );
};

export default App;
