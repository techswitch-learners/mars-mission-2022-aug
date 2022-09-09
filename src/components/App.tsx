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
          mapImageUrl="/images/routes/curiosity-route-mobile.jpg"
          pois={[
            { x: 0.45, y: 0.09, sol: 2},
            { x: 0.24, y: 0.38, sol: 502},
            { x: 0.24, y: 0.63, sol: 1200},
            { x: 0.4, y: 0.86, sol: 2090},
            { x: 0.8, y: 0.88, sol: 2695},
          ]}
        />}/>
        <Route path="/rovers/spirit" element={<RouteMap
          roverName="Spirit"
          mapImageUrl="/images/routes/spirit-route.jpg"
          pois={[
            { x: 0.25, y: 0.07, sol: 1},
            { x: 0.51, y: 0.08, sol: 73},
            { x: 0.51, y: 0.08, sol: 125},
            { x: 0.62, y: 0.67, sol: 200},
            { x: 0.62, y: 0.8, sol: 600},
            { x: 0.2, y: 0.91, sol: 750},
          ]}
        />}/>
        <Route path="/rovers/opportunity" element={<RouteMap
          roverName="Opportunity"
          mapImageUrl="/images/routes/opportunity_traverse_map_ctx_hrsc_cowart.jpg"
          pois={[
            { x: 0.21, y: 0.16, sol: 1},
            { x: 0.4, y: 0.33, sol: 1486},
            { x: 0.35, y: 0.13, sol: 100},
            { x: 0.47, y: 0.52, sol: 2555},
            { x: 0.76, y: 0.82, sol: 5000},
          ]}
        />}/>
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/photo-gallery" element={<PhotoGallery />} />
      </Routes>
    </>
  );
};

export default App;
