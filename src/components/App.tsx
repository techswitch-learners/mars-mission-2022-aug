import React from "react";
import "./App.scss";
import { Header } from "./navigation/Header";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./landingPage/LandingPage";
import { FunFactPage } from "./funFacts/FunFactPage";
import { RoverSelectorPage } from "./roverSelector/RoverSelectorPage";
import { QuizPage } from "./quiz/QuizPage";
import { PhotoGallery } from "./photoGallery/PhotoGallery";
import { RouteMap } from "./map/RouteMap";

const App: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/fun-facts" element={<FunFactPage />} />
        <Route path="/rovers" element={<RoverSelectorPage />} />
        <Route path="/rovers" element={<RoverSelectorPage />}/>
        <Route path="/rovers/curiosity" element={<RouteMap
          roverName="Curiosity"
          mapImageUrl="https://mars.nasa.gov/system/resources/deepzooms/24816_MSL_TraverseMap_Sol2695.jpg"
          pois={[
            { x: 0.68, y: 0.1, sol: 0},
            { x: 0.45, y: 0.41, sol: 655},
            { x: 0.326, y: 0.76, sol: 1683},
            { x: 0.4, y: 0.86, sol: 2695},
          ]}
        />}/>
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/photo-gallery" element={<PhotoGallery />} />
      </Routes>
    </>
  );
};

export default App;
