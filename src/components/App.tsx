import React from "react";
import "./App.scss";
import { Header } from "./navigation/Header";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./landingPage/LandingPage";
import { FunFactPage } from "./funFactPage/FunFactPage";

const App: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/funfactpage" element={<FunFactPage />} />
      </Routes>
    </>
  );
};

export default App;
