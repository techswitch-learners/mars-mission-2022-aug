import React, { useState } from "react";
import { QuizQuestions } from "./QuizQuestions";
import { UserDetailsForm } from "./UserDetailsForm";
import { questions } from "./questions";
import { Reward } from "./Reward";
import './QuizQuestions.scss';

interface User {
  name?: string;
  displayPicUrl?: string;
}

export const QuizPage: React.FunctionComponent = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [score,setScore] = useState<number>(0);
  const [isEndOfQuestions, setIsEndOfQuestions] = useState(false);
  const [userDetails, setUserDetails] = useState<User>();
  
  if (isUserLoggedIn === false) {
    return (
      <UserDetailsForm
        isUserLoggedIn={isUserLoggedIn}
        setIsUserLoggedIn={setIsUserLoggedIn}
        setUserDetails={setUserDetails}
      />
    );
  } else if (!isEndOfQuestions) {  
    return (
      <QuizQuestions
      questions={questions}
      score={score}
      setScore={setScore}
      setIsEndOfQuestions={setIsEndOfQuestions}
      />
    );
  }else{
    return(
    <Reward score={score} userDetails={userDetails} />
    );
  }  
};





    