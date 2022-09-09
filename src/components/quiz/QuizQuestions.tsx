import React, { useState } from "react";
import { Question } from "./questions";
import { UserDetailsForm } from "./UserDetailsForm";

interface QuizQuestionsProps {
   questions: Question[];
   score: number;
   setScore: (score: number) => void;
   setIsEndOfQuestions: (isEndOfQuestions: boolean) => void;
}


export const QuizQuestions: React.FunctionComponent<QuizQuestionsProps> = ({
  questions,score,setScore,setIsEndOfQuestions
}) => {

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const activeQuestion = questions[activeQuestionIndex];
  const [activeQuestionClicked, setActiveQuestionClicked] = useState(false);
  const [message, setMessage] = useState("");
  
  const selectAnswer = (answerIndex: number) => {
    setActiveQuestionClicked(true);
    if (answerIndex === activeQuestion.correctAnswerIndex) {
      setScore(score + 1);
      setMessage('Correct!!!')
    } else{
      setMessage('Incorrect!!!')
    } 
  }

  const renderResult = () => {
    if (activeQuestionClicked !== false) {
      return (
        <div className="quiz-questions">
          <h3>{message}</h3>
          <p>{activeQuestion.answerDetailsText}</p>
          <button className="next-question" onClick={() => { moveToNextQuestion() }} >NextQuestion </button>
        </div>
      );
    }
  } 

  const moveToNextQuestion = () => {    
    setActiveQuestionClicked(false);
    if (activeQuestionIndex < questions.length) {
        setActiveQuestionIndex(activeQuestionIndex + 1);   
    }
  }

  if (activeQuestionIndex < questions.length) {
    return (
      <div className="quiz-questions">
        <h1>Quiz</h1>
        <div>
          <h3>Question {activeQuestionIndex + 1}</h3>
          <p> {activeQuestion.questionText}</p>
          <img src={activeQuestion.questionImageUrl} />
        </div>

        <ul>
          {activeQuestion.answersText.map((answer: string, index: number) => {
            return (
              <li key={index}>
                <button
                  className="select-answer"
                  onClick={() => {
                    selectAnswer(index);
                  }}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>

        <div>{renderResult()}</div>
      </div>
    );
  } else {
    setIsEndOfQuestions(true);
  }
};
