import React from "react";
import { funFacts } from "./funfacts";
<<<<<<< HEAD
import { FunFact } from "./FunFactComponent";
=======
import { FunFactComponent } from "./FunFactComponent";
>>>>>>> 0943b17172ee742768995ff7f3254665efdcf240
import "./FunFactPage.scss";

export const FunFactPage: React.FunctionComponent = () => {
  return (
    <main>
      <h1>Fun Facts</h1>
<<<<<<< HEAD
      <FunFact funFacts={funFacts} />
=======
      <FunFactComponent funFacts = {funFacts} />
>>>>>>> 0943b17172ee742768995ff7f3254665efdcf240
    </main>
  );
};
