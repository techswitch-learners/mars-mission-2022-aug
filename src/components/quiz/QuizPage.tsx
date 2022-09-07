import React, { useState } from "react";
import { QuizQuestions } from "./QuizQuestions";
import { UserDetails } from "./UserDetails";
import { Reward } from "./Reward";

interface Stat{
  userStatus: boolean;
}

export const QuizPage: React.FunctionComponent = () => {

  const [userStatus, setUserStatus] = useState(false);
 
  if (userStatus===false) {
    return <UserDetails status={userStatus} setStatus={setUserStatus} />;
  } else {
    return <QuizQuestions />
  }
   return <Reward />
  // if () {
  //   return  <Reward />
  // }      
   
};
