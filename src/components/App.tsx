import React from "react";
import "./App.scss";
import { Header } from "./navigation/Header";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./landingPage/LandingPage";

const App: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
};

export default App;
