import React from "react";
import { QuizQuestions } from "./QuizQuestions";
import { UserDetails } from "./UserDetails";
import { Reward } from "./Reward";
import { questions } from "./questions";

export const QuizPage: React.FunctionComponent = () => {
  return (
    <div>
      <UserDetails />
      <QuizQuestions questions={questions} />
      <Reward />
    </div>
  );
};
