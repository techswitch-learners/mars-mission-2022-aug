import React from "react";
import "./App.scss";
import { Header } from "./navigation/Header";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./landingPage/LandingPage";
import { RoverSelectorPage } from "./roverSelector/RoverSelectorPage";

const App: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/rovers" element={<RoverSelectorPage />} />
      </Routes>
    </>
  );
};

export default App;
