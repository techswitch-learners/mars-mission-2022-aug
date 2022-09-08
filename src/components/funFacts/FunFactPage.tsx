import React from "react";
import { funfacts } from "./funfacts"
import { FunFactComponent } from "./FunFactComponent.jsx"

export const FunFactPage: React.FunctionComponent = () => {
  return (
    <main>
      <h1>Fun Facts</h1>
      <FunFactComponent funfacts = { funfacts } />
    </main>
  );
};
