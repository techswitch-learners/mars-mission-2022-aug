import React from "react";
import "./App.scss";
import { Header } from "./navigation/Header";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./landingPage/LandingPage";
import { FunFactPage } from "./funFacts/FunFactPage";
import { RoverSelectorPage } from "./roverSelector/RoverSelectorPage";
import { QuizPage } from "./quiz/QuizPage"

const App: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/fun-facts" element={<FunFactPage />} />
        <Route path="/rovers" element={<RoverSelectorPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </>
  );
};

export default App;
