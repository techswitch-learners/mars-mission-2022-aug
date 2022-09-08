import React from "react";
import { Question } from "./questions";

interface QuizQuestionsProps {
  questions: Question[];
}

export const QuizQuestions: React.FunctionComponent<QuizQuestionsProps> = ({
  questions,
}) => {
  return (
    <div>
      <h1>Quiz</h1>
      <div>
        <h3>Question {activeQuestion.id}</h3>
        <p> {activeQuestion.Question}</p>
        <img src={activeQuestion.url} />
      </div>
      <form>
        <ul>
          {activeQuestion.Answers.map((answer: any, index: any) => {
            return (
              <li>
                <button type="submit" name="index">
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </form>
    </div>
  );
};
