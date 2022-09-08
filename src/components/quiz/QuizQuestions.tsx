import React, { useState } from "react";
import { Question } from "./questions";
import { Reward } from "./Reward";

interface QuizQuestionsProps {
   questions: Question[];
}


export const QuizQuestions: React.FunctionComponent<QuizQuestionsProps> = ({
  questions,
}) => {

   const [score,setScore] = useState(0);
   const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
   const activeQuestion = questions[activeQuestionIndex];

  return (
    <div>
      <h1>Quiz</h1>
      <div>
        <h3>Question {activeQuestionIndex+1}</h3>
        <p> {activeQuestion.questionText}</p>
        <img src={activeQuestion.questionImageUrl} />
      </div>
      <form>
        <ul>
          {activeQuestion.answersText.map((answer: string , index: number) => {
            return (
              <li key={ index }>
                <button type="submit" name="index">
                  { answer }
                </button>
              </li>
            );
          })}
        </ul>
      </form>
    </div>
  );
};
