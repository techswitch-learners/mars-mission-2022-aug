import React from "react";
import './Reward.scss';

interface User {
  name?: string;
  displayPicUrl?: string;
}
interface RewardProps {
  score: number;
  userDetails: User;
}

export const Reward: React.FunctionComponent<RewardProps> = ({ score, userDetails }) => {
  const renderMessage = () => {
    if (score < 3) {
      return <h3 className="reward-card-print">Maybe check the fun facts about mars? Your score is {score}</h3>;
    }
     if (score > 3 && score <= 6) {
       return (
         <h3 className="reward-card-print">Not Bad? Your score is {score}</h3>
       );
    }
     if (score > 6 && score <= 8) {
       return <h3 className="reward-card-print">Very good! Your score is {score}</h3>;
    }
    if (score > 8) {
      return <h3 className="reward-card-print">Congratulations Martian ! Your score is : {score}</h3>;
    }
}
  return (
    <div className="reward-for-user">
      <h2 className="user-name">{userDetails.name} </h2>
      <img className="user-image" src={userDetails.displayPicUrl} alt="display picture" />
      { renderMessage() }
    </div>
  );
};
