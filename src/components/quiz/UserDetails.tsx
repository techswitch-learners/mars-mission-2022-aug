import React, { useState } from "react";

interface User {
  name: string;
  displayPic: string;
}

export const UserDetails: React.FunctionComponent = () => {
  [userDetails, setUSerDetails] = useState<User>({
    name: "",
    displayPic: "",
  });

  function onSubmit() {
    setUserDetails({
      name: "",
      displayPic: ""
    });
  }

  return (
    <div>
      // form for the UserDetails //set the state with the UserDetails
      <h1>This is the UserDetails Component</h1>
    </div>
  );
};
