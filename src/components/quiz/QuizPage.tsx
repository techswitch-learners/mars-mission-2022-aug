import React, { useState } from "react";
import { QuizQuestions } from "./QuizQuestions";
import { UserDetailsForm } from "./UserDetailsForm";
import { questions } from "./questions";
import { Reward } from "./Reward";

export const QuizPage: React.FunctionComponent = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [score, setScore] = useState(0);
  const [hasCompletedQuiz, sethasCompletedQuiz] = useState(false);
 
  if (!isUserLoggedIn) {
    return (
      <UserDetailsForm
        isUserLoggedIn={isUserLoggedIn}
        setIsUserLoggedIn={setIsUserLoggedIn}
      />
    );
  } else {    
    return (<QuizQuestions
      questions={questions}
      score={score}
      setScore={setScore}
      hasCompletedQuiz={hasCompletedQuiz}
      setHasCompletedQuiz={sethasCompletedQuiz}
    />);
  }  
};
