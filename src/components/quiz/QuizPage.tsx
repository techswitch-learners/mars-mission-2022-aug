import React from "react";
import { QuizQuestions } from "./QuizQuestions";
import { UserDetails } from "./UserDetails";

export const QuizPage: React.FunctionComponent = () => {
  return (
    <div>
      <h1>This is the Quiz Component</h1>
      <UserDetails />
      <QuizQuestions />
    </div>
  );
};
