import React, { useState } from "react";
import { QuizQuestions } from "./QuizQuestions";
import { UserDetailsForm } from "./UserDetailsForm";
import { Reward } from "./Reward";

interface Stat{
  userStatus: boolean;
}

export const QuizPage: React.FunctionComponent = () => {

  const [userStatus, setUserStatus] = useState(false);
 
  if (userStatus===false) { 
    return <UserDetailsForm status={userStatus} setStatus={setUserStatus} />;
  } else {
   
    return <QuizQuestions />
  }
   return <Reward />
    
   
};
