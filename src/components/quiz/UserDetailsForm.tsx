import React, { useState } from "react";

interface User {
  name: string | null;
  displayPic: string | null;
}

export const UserDetailsForm: React.FunctionComponent = ({status,setStatus}: any) => {

  const [userDetails, setUserDetails] = useState<User>({
    name: null,
    displayPic:null,
  });
  

  function onSubmit(event: any) {    
    event.preventDefault();     
    setStatus(true);   
  }

  return (
    <div>
      <h2>Enter your details cadet !</h2>
   
      <form action="post">
        <div className="name">
          <label> Name: </label>
          <input
            name="Name"
            type="text"
            onChange={(e) =>
              setUserDetails({ ...userDetails, name: e.target.value })
            }
          />
        </div>

        <div className="displayPic">
          <label> Display pic : </label>
          <input
            type="text"           
            onChange={(e) =>
              setUserDetails({ ...userDetails, displayPic: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          value="Send"
          className="submit-button"
          onClick={(submit) => onSubmit(submit)}
        >
          Start Quiz...
        </button>

      </form>
    </div>
  );
};
