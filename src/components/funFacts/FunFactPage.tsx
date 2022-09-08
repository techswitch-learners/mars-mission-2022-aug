import React from "react";
import { funFacts } from "./funfacts";
import { FunFactComponent } from "./FunFactComponent";
import "./FunFactPage.scss";

export const FunFactPage: React.FunctionComponent = () => {
  return (
    <main>
      <h1>Fun Facts</h1>
      <FunFactComponent funFacts = {funFacts} />
    </main>
  );
};
