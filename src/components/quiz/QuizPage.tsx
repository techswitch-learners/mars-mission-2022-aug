import React, { useState } from "react";
import { QuizQuestions } from "./QuizQuestions";
import { UserDetailsForm } from "./UserDetailsForm";
import { Reward } from "./Reward";

export const QuizPage: React.FunctionComponent = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  if (isUserLoggedIn === false) {
    return (
      <UserDetailsForm
        isUserLoggedIn={ isUserLoggedIn }
        setIsUserLoggedIn={ setIsUserLoggedIn }
      />
    );
  } else {
    return <QuizQuestions />;
  }
  return <Reward />;
};
