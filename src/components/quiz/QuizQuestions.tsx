import React from "react";
import { Question } from "./questions";
import { Reward } from "./Reward";

interface QuizQuestionsProps {
  questions: Question[];
}

export const QuizQuestions: React.FunctionComponent<QuizQuestionsProps> = ({
  questions,
}) => {
  return (
    <div>
      <h1>This is the Questions Component</h1>
      <Reward />
    </div>
  );
};
