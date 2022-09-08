import React from "react";


interface User {
  name?: string;
  displayPicUrl?: string;
}
interface RewardProps {
  score: number;
  userDetails: User;
}

export const Reward: React.FunctionComponent<RewardProps> = ({score,userDetails}) => {
  return (
    <div className="reward-for-user">
      <img src={userDetails.displayPicUrl} alt="display picture" />
      <h2>{userDetails.name} </h2>
      <h3>Congratulations Martian!!! Your score is {score}</h3>
    </div>
  );
};
