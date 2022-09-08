import React from "react";
import { funFacts } from "./funFacts";
import { FunFact } from "./FunFact";
import "./FunFactPage.scss";

export const FunFactPage: React.FunctionComponent = () => {
  return (
    <main>
      <h1>Fun Facts</h1>
      <FunFact funFacts={funFacts} />
    </main>
  );
};
