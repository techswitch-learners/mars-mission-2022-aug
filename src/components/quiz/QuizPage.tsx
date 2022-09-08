import React, { useState } from "react";
import { QuizQuestions } from "./QuizQuestions";
import { UserDetailsForm } from "./UserDetailsForm";
import { questions } from "./questions";

export const QuizPage: React.FunctionComponent = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  if (isUserLoggedIn === false) {
    return (
      <UserDetailsForm
        isUserLoggedIn={ isUserLoggedIn }
        setIsUserLoggedIn={ setIsUserLoggedIn }
      />
    );
  } 
  if(isUserLoggedIn === true) {
    return <QuizQuestions questions={ questions } />;
  }
};
