import React from "react";
import './Reward.scss';

interface User {
  name?: string;
  displayPicUrl?: string;
}
interface RewardProps {
  score?: number;
  userDetails: User;
}

export const Reward: React.FunctionComponent<RewardProps> = ({ score, userDetails }) => {
  const renderMessage = () => {
    if (score < 3) {
      return <h3>Maybe check the fun facts about mars? Your score is {score}</h3>;
    }
     if (score > 3 && score <= 6) {
       return (
         <h3>Not Bad? Your score is {score}</h3>
       );
    }
     if (score > 6 && score <= 8) {
       return <h3>Very good! Your score is {score}</h3>;
    }
    if (score > 8) {
      return <h3>Congratulations Martian ! Your score is : {score}</h3>;
    }
}
  return (
    <div className="reward-for-user">
      <img src={userDetails.displayPicUrl} alt="display picture" />
      <h2>{userDetails.name} </h2>
     { renderMessage() }
    </div>
  );
};
