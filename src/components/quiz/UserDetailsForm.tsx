import React, { useState } from "react";
import './UserDetailsForm.scss';

interface User {
  name?: string;
  displayPicUrl?: string;
}

interface UserDetailsFormProps {
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: (isUserLoggedIn: boolean) => void;
}

export const UserDetailsForm: React.FunctionComponent<UserDetailsFormProps> = ({
  isUserLoggedIn,
  setIsUserLoggedIn,
}) => {
  const [userDetails, setUserDetails] = useState<User>();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setIsUserLoggedIn(true);
  };

  return (
    <div className="userDetails">
      <h2>Enter your details cadet!</h2>

      <form onSubmit={ onSubmit }>
        <div>
          <label htmlFor="user-details-form-name">
            Name:
            <input 
              id="user-details-form-name"
              type="text"
              onChange={(e) =>
                setUserDetails({ ...userDetails, name: e.target.value })
              }
            />
          </label>
        </div>

        <div>
          <label htmlFor="user-details-form-displayPic">
            Display pic:
            <input
              id="user-details-form-displayPic"
              type="text"
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  displayPicUrl: e.target.value,
                })
              }
            />
          </label>
        </div>

        <input type="submit" value="Start Quiz" className="submit-button" />
      </form>
    </div>
  );
};
