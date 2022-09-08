import React, { useState } from "react";
import { QuizQuestions } from "./QuizQuestions";
import { UserDetailsForm } from "./UserDetailsForm";
import { questions } from "./questions";
import { Reward } from "./Reward";
import './QuizQuestions.scss';

export const QuizPage: React.FunctionComponent = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [score,setScore] = useState<number>(0);
  const [isEndOfQuestion, setIsEndOfQuestion] = useState(false);
 
  if (isUserLoggedIn === false) {
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
      isEndOfQuestion={isEndOfQuestion}
      setIsEndOfQuestion={setIsEndOfQuestion}
    />);
  }  
};





    